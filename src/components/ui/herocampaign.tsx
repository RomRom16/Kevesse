import React from "react";

const TrendingComponent: React.FC = () => {
  return (
    <div className="p-5 w-full my-[90px] bg-white/[0.07] backdrop-blur-2xl border-[1px] border-[white]/[0.2] rounded-[20px]">
      <div className=" w-[fit-content] mx-auto">
        <p className="text-white font-bold text-center">Trending</p>
        <div className="flex flex-row gap-4">
          <a href="#" className="text-white">
            Campaign 1
          </a>
          <a href="#" className="text-white">
            Campaign 2
          </a>
        </div>
      </div>
      <div className="bg-[blue] mt-[40px] p-5 rounded-xl min-h-[400px]">
        <div className="flex">
          <div className="bg-[red] w-[70px] h-[70px] rounded-xl"></div>
          <div>
            <h1>Campaign's Title</h1>
            <p>Amount Collected</p>
            <p>From ... users</p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default TrendingComponent;
