import React from "react";

interface CampaignCardProps {
  imageLink: string;
  campaignTitle: string;
  daysLeft: number;
  category: string;
  fundingTarget: number;
}

function CampaignCard({
  imageLink,
  campaignTitle,
  daysLeft,
  category,
  fundingTarget,
}: CampaignCardProps) {
  return (
    <article
      className="text-white rounded-[20px] w-full max-w-[225px] cursor-pointer border-[1px] border-white/[0.15] p-1"
      style={{
        backgroundImage: "linear-gradient(#252525, rgba(37, 37, 37, 0.5))",
        WebkitBoxShadow: "0px 0px 195px 1px rgba(17,17,17,0.52)",
        MozBoxShadow: "0px 0px 195px 1px rgba(17,17,17,0.52)",
        boxShadow: "0px 10px 40px 0px rgba(17,17,17,0.60)",
      }}
    >
      {" "}
      <div className="text-white rounded-2xl bg-[#111111]  text-[13px]">
        <figure className="flex justify-center items-center w-full h-[130px] p-2 pb-0 rounded-lg text-center">
          <img
            src={imageLink}
            alt="Campaign"
            className="rounded-xl"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>

        <div className="p-4">
          <div className="flex flex-col ">
            <div>
              <p className="border-[1px] px-2 h-[fit-content] w-[fit-content] rounded-2xl border-[white]/[0.4] bg-[white]/[0.07]">
                {category || "Category"}
              </p>
            </div>
            <p
              className="font-semibold text-[15px] overflow-hidden truncate"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
            >
              {campaignTitle || "Title"}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p>
              0%
              <span className="text-white/[0.6]">
                {" "}
                of {fundingTarget || 0}ETH
              </span>
            </p>
            <p>{daysLeft || 365} days left</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CampaignCard;
