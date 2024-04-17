import React from "react";
import CampaignCard from "@/components/campaigncard";
import initializeFirebaseClient from "@/lib/initFirebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

type CampaignData = {
  imageUrl: string;
  title: string;
  deadline: string;
  category: string;
  target: number;
};


async function loader() {
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

export default async function Explore() {
  const { campaigns } = await loader();
  return (
    <main className="mt-[55px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white p-5">
      {campaigns &&
        campaigns.map((campaign) => (
          <div key={campaign.id} className="flex justify-center">
            <CampaignCard
              imageLink={
                campaign.imageUrl || "https://example.com/default-image.jpg"
              }
              campaignTitle={campaign.title || "No title provided"}
              daysLeft={3}
              category={campaign.category || "No category"}
              fundingTarget={campaign.target || 0}
            />
          </div>
        ))}
    </main>
  );
}
