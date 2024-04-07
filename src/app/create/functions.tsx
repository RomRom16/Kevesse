import { z } from "zod";
import { Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import initializeFirebaseClient from "@/lib/initFirebase";

const { storage } = initializeFirebaseClient();

export const formSchema = z.object({
  title: z.string().min(2).max(50),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  type: z.enum(["Classic", "BWU", "none"], {
    required_error: "You need to select a notification type.",
  }),
  category: z.string({
    required_error: "Please select an email to display.",
  }),
  deadline: z.date({
    required_error: "A deadline is required.",
  }),
});

// Use z.infer to infer the type of the formSchema
export type FormValues = z.infer<typeof formSchema>;

export async function uploadImage(file: File | null): Promise<string | undefined> {
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
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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

export const createDocumentData = (values: FormValues, imageUrl: string | undefined, userUid: string) => {
  return {
    ...values,
    imageUrl,
    owner: userUid,
    payedOut: false,
    amountCollected: 0,
    dateCreated: Timestamp.fromDate(new Date()),
    campaignStatus: 1,
  };
};
