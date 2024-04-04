"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import TrendingComponent from "@/components/ui/herocampaign";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1900px] mt-[55px] mx-auto">
        {/*<div className="absolute left-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_80%_50%_at_50%_-17%,rgba(72,155,240,0.3),rgba(0,0,0,0))] w-full  "></div>*/}
        <div
          className="relative flex justify-top items-center flex-col  pl-[0px] max-w-[1900px] mx-auto "
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 98%, #0077ff 0%, hsla(0, 0%, 27.45%, 0) 59%), radial-gradient(circle at 46% 106%, #5309dc 10%, hsla(240,7.94%,12.35%,0.4) 84%), radial-gradient(circle at -6% 146%, #00fff2 38%, hsla(57.78, 87.1%, 12.16%, 0) 65%), radial-gradient(circle at 50% 200%, hsla(247.14, 100%, 91.76%, 0) 84%, #000000 94%), radial-gradient(circle at 108% 16%, #00000b 22%, hsla(347.94, 85.09%, 44.71%, 0) 78%), radial-gradient(circle at 5% -3%, #030024 10%, hsla(30.51,71.08%,16.27%,0.4) 88%)",
          }}
        >
          <div className="h-fit-content mt-[90px] flex flex-col justify-center items-center z-50">
            <div className=" flex justify-center border-0 text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-white/[0.07] hover:bg-white/[0.1] text-white flex items-center border-0 space-x-2 "
              >
                <span>Discover what's new !</span>
              </HoverBorderGradient>
            </div>
            <h1 className="text-3xl text-white font-bold leading-tight mt-8 pb-[10px] text-center  md:text-7xl lg:text-[110px] tracking-[-0.05em]">
              Unleash the Future :<br />
              Web3 Crowdfunding
            </h1>
            <h4 className="mt-[15px] text-white/[0.7] max-w-[400px] sm:max-w-[630px] text-sm px-[20px] text-center text-base sm:text-base sm:text-xl lg:text-[22px]">
              Revolutionize how ideas get funded. Streamline backing, monitor
              developments, and foster innovation with ease.
            </h4>
            <div className="bg-[white]/[0.3] border-[1px] border-white/[0.2] p-1 my-[50px] rounded-[19px]">
              <button
                className=" bg-gradient-to-t from-[#9386b5] to-white text-[14px] px-5 py-3 text-[#080219]/[0.90] font-semibold md:px-6 md:py-4 md:text-[18px] lg:text-[22px] rounded-2xl transition duration-150 ease-in-out 
btn-primary btn-lg"
              >
                Participate in a project
                <div className="ml-[3px] pt-[0px]"></div>
              </button>
            </div>
          </div>
          <div className="w-full box-border px-[20px]">
            <TrendingComponent />
          </div>
        </div>

        <h1 className="text-center w-full mb-[1000px]">
          Discover new campaigns
        </h1>
        <h1 className="text-center w-full">Customise</h1>
        <h1 className="text-center w-full">Classic and Build with</h1>
        <h1 className="text-center w-full">Milestones</h1>
      </div>
    </main>
  );
}
