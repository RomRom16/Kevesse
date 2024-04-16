import * as React from "react";
import CampaignCard from "@/components/campaigncard";

interface CampaignPreviewProps {
  campaignTitle: string;
}

const CampaignPreview: React.FC<CampaignPreviewProps> = ({ campaignTitle }) => {
  return (
    <div
      className="p-20 rounded-lg border-[1px] border-white/[0.15]"
      style={{
        background:
          "linear-gradient(0deg, rgba(46,116,255,0.8) 0%, rgba(17,17,17,1) 100%)",
        WebkitBoxShadow: "0px 0px 195px 1px rgba(46,116,255,0.52)",
        MozBoxShadow: "0px 0px 195px 1px rgba(46,116,255,0.52)",
        boxShadow: "0px 0px 195px 1px rgba(46,116,255,0.52)",
      }}
    >
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[30px] text-center">
          Early look at your campaign.
        </h1>
        <p className="text-center mb-[50px]">
          This component will be used in :<br />
          public campaign list, your campaign list
        </p>

        <CampaignCard
          imageLink="https://example.com/image.jpg"
          campaignTitle={campaignTitle || "Title"}
          daysLeft={60}
          category="Environment"
          fundingTarget={4}
        />
      </div>
    </div>
  );
};

export default CampaignPreview;
