import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import TrendingComponent from "@/components/ui/herocampaign";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="mt-[55px]">
      {/*<div className="absolute left-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_80%_50%_at_50%_-17%,rgba(72,155,240,0.3),rgba(0,0,0,0))] w-full  "></div>*/}
      <section className="px-[20px] py-[80px] bg-no-repeat bg-[url('../components/assets/home.svg')]">
        <div className="flex flex-col gap-[100px] max-w-[1900px] mx-auto">
          <div className="flex flex-col items-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white/[0.07] hover:bg-white/[0.1]"
            >
              <span className="flex items-center gap-1">
                Discover what's new
                <svg
                  width="17px"
                  height="17px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#FFFFFF"
                  strokeWidth="1.5"
                >
                  <path
                    d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z"
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z"
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </HoverBorderGradient>
            <h1 className="text-3xl text-white font-semibold leading-tight text-balance	 mt-8 pb-[10px] text-center  md:text-7xl lg:text-[110px] tracking-[-0.05em]">
              Unleash the Future : Web3 Crowdfunding
            </h1>
            <h4 className="mt-[15px] text-white/[0.7] max-w-[400px] sm:max-w-[630px] text-balance text-sm px-[20px] text-center text-base sm:text-base sm:text-xl lg:text-[22px]">
              Revolutionize how ideas get funded. Streamline backing, monitor
              developments, and foster innovation with ease.
            </h4>
            <div className="bg-[white]/[0.3] border-[1px] border-white/[0.2] p-[3px] mt-[50px] rounded-[19px]">
              <button
                className=" bg-gradient-to-t from-[rgb(169,177,244)]/[0.9] to-white text-[14px] px-5 py-3 text-[rgb(9,17,84)] font-semibold md:px-6 md:py-4 md:text-[18px] lg:text-[22px] rounded-2xl transition duration-150 ease-in-out 
btn-primary btn-lg"
              >
                Participate in a project
              </button>
            </div>
          </div>
          <TrendingComponent />
        </div>
      </section>
      <section>
        <h1 className="text-center w-full mb-[1000px]">
          Discover new campaigns
        </h1>
        <h1 className="text-center w-full">Customise</h1>
        <h1 className="text-center w-full">Classic and Build with</h1>
        <h1 className="text-center w-full">Milestones</h1>
      </section>
    </main>
  );
}
