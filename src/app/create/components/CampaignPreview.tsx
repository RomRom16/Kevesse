import * as React from "react";

interface CampaignPreviewProps {
  campaignTitle: string;
}

const CampaignPreview: React.FC<CampaignPreviewProps> = ({ campaignTitle }) => {
  return (
    <div
      className="p-5 rounded-lg"
      style={{
        background:
          "linear-gradient(157deg, rgba(46,116,255,0.5) 0%, rgba(46,116,255,0.7) 100%)",
        WebkitBoxShadow: "0px 0px 195px 1px rgba(46,116,255,0.52)",
        MozBoxShadow: "0px 0px 195px 1px rgba(46,116,255,0.52)",
        boxShadow: "0px 0px 195px 1px rgba(46,116,255,0.52)",
      }}
    >
      <h1 className="font-semibold text-[30px]">How your campaign will look</h1>
      <p>
        This component will be used in : public campaign list, your campaign
        list
      </p>
      <div className="h-full w-full flex justify-center items-center">
        <div className=" h-[350px] text-white rounded-2xl  bg-[black]/[0.6] p-4 w-[250px]">
          <div className="flex justify-center items-center w-full bg-gradient-to-b from-muted/50 to-muted h-[200px] rounded-2xl text-center">
            <p>Your campaign image (upload an img to visualize, step 4)</p>
          </div>
          <p>{campaignTitle || "Title"}</p>
          <div className="flex">
            <p>0% of 4ETH</p>
            <p>x Contributors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPreview;
