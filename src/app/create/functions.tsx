import { z } from "zod";
import { Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import initializeFirebaseClient from "@/lib/initFirebase";

const { storage } = initializeFirebaseClient();

export enum CampaignStatus {
  Ongoing = "Ongoing",
  Won = "Won",
  Lost = "Lost",
}

export const formSchema = z.object({
  title: z.string().min(2).max(50),
  bio: z
    .string()
    .min(50, {
      message: "Description must be at least 50 characters.",
    })
    .max(160, {
      message: "Description must be shorter than 160 characters.",
    }),
  type: z.enum(["Classic", "BWU", "none"], {
    required_error: "You need to select a campaign type type.",
  }),
  category: z.string({
    required_error: "Please select a category",
  }),
  deadline: z.date({
    required_error: "A deadline is required.",
  }),
  target: z.coerce.number().min(0, { message: "Must be greater than 0" }),
});

export type FormValues = z.infer<typeof formSchema>;

export async function uploadImage(
  file: File | null
): Promise<string | undefined> {
  if (!file) {
    console.error("No file selected");
    return undefined;
  }
  const storageRef = ref(storage, `campaign_images/${file.name}_${Date.now()}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error("Upload failed:", error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          resolve(downloadURL);
        });
      }
    );
  });
}

export const createDocumentData = (
  values: FormValues,
  imageUrl: string | undefined,
  userUid: string
) => {
  return {
    ...values,
    imageUrl,
    owner: userUid,
    payedOut: false,
    amountCollected: 0,
    dateCreated: Timestamp.fromDate(new Date()),
    campaignStatus: CampaignStatus.Ongoing,
  };
};
