"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import CampaignCard from "@/components/campaigncard";
import initializeFirebaseClient from "@/lib/initFirebase";

// Define a type for your campaign data based on the structure of your Firebase documents
type Campaign = {
  imageUrl: string;
  title: string;
  deadline: string;
  category: string;
  target: number;
};

export default function Explore() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const { db } = initializeFirebaseClient(); // Get the Firestore instance

  useEffect(() => {
    const fetchCampaigns = async () => {
      const campaignsCol = collection(db, "campaigns");
      const campaignSnapshot = await getDocs(campaignsCol);
      const campaignsList = campaignSnapshot.docs.map(
        (doc) => doc.data() as Campaign
      );
      setCampaigns(campaignsList);
    };

    fetchCampaigns();
  }, [db]); // Include db in the dependency array to ensure it's initialized

  // Function to calculate days left until the deadline

  return (
    <main className="mt-[55px] grid grid-cols-5 gap-5 bg-white p-5">
      {campaigns.map((campaign, index) => (
        <div key={index} className="flex justify-center">
          {" "}
          {/* Centering horizontally */}
          <CampaignCard
            imageLink={
              campaign.imageUrl || "https://example.com/default-image.jpg"
            }
            campaignTitle={campaign.title || "Title"}
            daysLeft={3}
            category={campaign.category || "Category"}
            fundingTarget={campaign.target || 0}
          />
        </div>
      ))}
    </main>
  );
}
