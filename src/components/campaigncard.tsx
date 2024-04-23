"use client";

import { useState } from "react";
import React from "react";
import ArrowRight from "@/components/assets/Arrow right icon.svg";
import Image from "next/image";
import ETHIcon from "@/components/assets/Ethereum icon.svg";

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
    <article className="rounded-[19px] group cursor-pointer border-[1px] bg-[black]/[0] border-[black]/[0]  p-[8px] transition duration-300 ease-in-out hover:bg-[black]/[0.05] hover:border-[black]/[0.07]">
      <div className="flex items-center justify-between text-[black] mb-[11px] mt-[2px]">
        <p
          className="font-bold ml-[3px] text-[20px] overflow-hidden truncate capitalize"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
        >
          {campaignTitle || "Title"}
        </p>
        <div className="flex gap-2">
          <p className="flex items-center text-[16px] font-medium border-[1px] bg-[black]/[0.05] border-[black]/[0.07] rounded-[40px] pr-[4px] pl-[9px] h-[30px] translate-x-[35px]  w-[fit-content] transition-all duration-300 ease-in-out group-hover:-translate-x-[0px]">
            0% of {fundingTarget || 0}
            <Image src={ETHIcon} alt="ETH" className="" height={18} priority />
          </p>

          <div className="flex items-center justify-center text-[16px] font-medium border-[1px] h-[30px] bg-[black]/[0.05] border-[black]/[0.07] rounded-[40px] w-[30px] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <Image
              src={ArrowRight}
              alt="Arrow"
              className=""
              height={22}
              priority
            />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center max-w-[318px] w-full h-[185px]">
        <figure className="flex justify-center items-center w-full h-full text-center relative">
          <img
            src={imageLink}
            alt="Campaign"
            className="rounded-[16px]"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[black]/[0.07] rounded-[16px]"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/[0.6] to-transparent rounded-b-[16px]"></div>
        </figure>

        <div className="absolute flex text-[16px] text-medium text-white text-[16px] bottom-[10px] left-[10px]">
          <div className="flex gap-2">
            <p className="border-[1px] border-white/[0.09] px-2 py-[2px] h-fit w-fit rounded-2xl backdrop-blur-[20px] bg-white/10">
              {daysLeft || 365} days left
            </p>
            <p className="border-[1px] border-white/[0.09] px-2 py-[2px] h-fit w-fit rounded-2xl backdrop-blur-[20px] bg-white/10">
              {category || "Category"}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CampaignCard;
