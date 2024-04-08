import * as React from 'react';

interface CampaignPreviewProps {
  campaignTitle: string;
}

const CampaignPreview: React.FC<CampaignPreviewProps> = ({ campaignTitle }) => {
  return (
    <div
      className="p-5 rounded-lg"
      style={{
        background:
          "linear-gradient(157deg, rgba(105,105,105,1) 0%, rgba(0,31,71,1) 100%)",
      }}
    >
      <h1 className="font-semibold text-[30px]">
        How your campaign will look
      </h1>
      <p>
        This component will be used in : public campaign list, your campaign
        list
      </p>
      <div className="h-full w-full flex justify-center items-center">
        <div className=" h-[350px] text-white rounded-2xl  bg-[black]/[0.6] p-4 w-[250px]">
          <div className='flex justify-center items-center w-full bg-[grey] h-[200px] rounded-2xl text-center'><p>Your campaign image (upload an img to visualize, step 4)</p></div>
          <p>{campaignTitle || "Title"}</p>
          <div className="flex">
            <p>0% of 4ETH</p>
            <p>x Contributors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignPreview;
