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
      className="text-white rounded-[20px] w-full max-w-[300px] cursor-pointer border-[1px] border-white/[0.15] p-2"
      style={{
        backgroundImage: "linear-gradient(#252525, rgba(37, 37, 37, 0.5))",
        WebkitBoxShadow: "0px 0px 195px 1px rgba(17,17,17,0.52)",
        MozBoxShadow: "0px 0px 195px 1px rgba(17,17,17,0.52)",
        boxShadow: "0px 10px 40px 0px rgba(17,17,17,0.60)",
      }}
    >
      <div className="text-white rounded-2xl bg-[#111111] p-4  text-[14px]">
        <figure className="flex justify-center items-center w-full bg-gradient-to-b from-muted/50 to-muted h-[200px] rounded-2xl text-center">
          <img
            src={imageLink}
            alt="Campaign"
            className="rounded-2xl"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>
        <div className="pt-5">
          <div className="flex flex-col ">
            <p
              className="font-semibold text-[18px] overflow-hidden truncate"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
            >
              {campaignTitle || "Title"}
            </p>

            <div>
              <p></p>
              <p className="border-[1px] px-2 h-[fit-content] w-[fit-content] rounded-2xl border-[white]/[0.4] bg-[white]/[0.07]">
                {category || "Category"}
              </p>
            </div>
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
