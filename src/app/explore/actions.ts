"use server"

import initializeFirebaseClient from "@/lib/initFirebase";
import { collection, getDocs } from "firebase/firestore";

type CampaignData = {
    imageUrl: string;
    title: string;
    deadline: string;
    category: string;
    target: number;
  };

export async function loader() {
    const { db } = initializeFirebaseClient();
    const querySnapshot = await getDocs(collection(db, "campaigns"));
    const campaigns = querySnapshot.docs.map((doc) => {
      const docData = doc.data() as CampaignData;
      return {
        id: doc.id,
        ...docData,
      };
    });
    return { campaigns };
  }