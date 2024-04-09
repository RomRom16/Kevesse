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
          "linear-gradient(157deg, rgba(46,116,255,0.5) 0%, rgba(46,116,255,0.9) 100%)",
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
        <div
          className="text-white rounded-[20px]  bg-[#252525] border-[1px] border-white/[0.15] p-2"
          style={{
            WebkitBoxShadow: "0px 0px 195px 1px rgba(17,17,17,0.52)",
            MozBoxShadow: "0px 0px 195px 1px rgba(17,17,17,0.52)",
            boxShadow: "0px 0px 40px 3px rgba(17,17,17,0.70)",
          }}
        >
          <div className="text-white rounded-2xl  bg-[#111111] p-4 w-[250px]">
            <div className="flex justify-center items-center w-full bg-gradient-to-b from-muted/50 to-muted h-[200px] rounded-2xl text-center">
              <p>Your campaign image (upload an img to visualize, step 4)</p>
            </div>
            <div className="pt-5">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-[22px]">
                  {campaignTitle || "Title"}
                </p>
                <p className="border-[1px]  px-2 h-[fit-content] w-[fit-content] rounded-2xl border-[white]/[0.4] bg-[white]/[0.07]">
                  Category
                </p>
              </div>
              <div className="flex flex-col">
                <p>0%<span className="text-white/[0.6]"> of 4ETH</span></p><p>365 days left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPreview;
