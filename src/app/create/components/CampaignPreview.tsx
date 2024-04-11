import * as React from "react";

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
        <div
          className="text-white rounded-[20px] border-[1px] border-white/[0.15] p-2"
          style={{
            backgroundImage: "linear-gradient(#252525, rgba(37, 37, 37, 0.5))",

            WebkitBoxShadow: "0px 0px 195px 1px rgba(17,17,17,0.52)",
            MozBoxShadow: "0px 0px 195px 1px rgba(17,17,17,0.52)",
            boxShadow: "0px 10px 40px 0px rgba(17,17,17,0.60)",
          }}
        >
          <div className="text-white rounded-2xl  bg-[#111111] p-4 w-[250px] text-[14px]">
            <div className="flex justify-center items-center w-full bg-gradient-to-b from-muted/50 to-muted h-[200px] rounded-2xl text-center px-3">
              <p>Your campaign image. Upload to visualize, step 4</p>
            </div>
            <div className="pt-5">
              <div className="flex flex-col ">
                <p className="font-semibold text-[18px]">
                  {campaignTitle || "Title"}
                </p>
                <div>
                  <p></p>
                  <p className="border-[1px]  px-2 h-[fit-content] w-[fit-content] rounded-2xl border-[white]/[0.4] bg-[white]/[0.07]">
                    Category
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p>
                  0%<span className="text-white/[0.6]"> of 4ETH</span>
                </p>
                <p>365 days left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPreview;
