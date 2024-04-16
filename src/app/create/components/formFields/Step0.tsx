import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";

interface Step0Props {
  control: any;
}

export const Step0: React.FC<Step0Props> = ({ control }) => (
  <div className="w-full">
    <p className="font-semibold text-[50px] text-balance mb-[60px] leading-tight text-white/[0.6] tracking-[-0.03em]">
      <span className="text-white">Let's start</span> by selecting the{" "}
      <span
        className="bg-gradient-to-r from-blue-500 to-cyan-200 bg-clip-text inline-block text-transparent"
        style={{
          textShadow: "0px 0px 40px rgba(120,120,255,1)",
        }}
      >
        type of campaign
      </span>{" "}
      that fit your project.
    </p>
    <FormField
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Type of campaign</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-1 lg:grid-cols-2 w-full"
            >
              <FormItem className="flex flex-col">
                <FormLabel className="font-normal hover:cursor-pointer rounded-xl border-[1px] border-[white]/[0.1] hover:bg-[white]/[0.2] h-full p-5 bg-[#1f1f1f]">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-200 h-[17px] w-[17px] rounded-[200px] ml-[-2px] mb-[10px]"></div>

                  <div className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="Classic" />
                    </FormControl>
                    <p className="font-semibold">Classic campaign</p>
                  </div>
                  <p className="mt-[10px]">
                    Set a clear financial target, then exceed it to unlock extra
                    rewards. This traditional model boosts ongoing support by
                    offering additional value as you surpass goals.
                  </p>
                </FormLabel>
              </FormItem>
              <FormItem className="flex flex-col">
                <FormLabel className="font-normal hover:cursor-pointer rounded-xl border-[1px] border-[white]/[0.1] hover:bg-[white]/[0.2] h-full p-5 bg-[#1f1f1f]">
                  <div className="flex">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-200 h-[17px] w-[17px] rounded-[200px] ml-[-2px] mb-[10px]"></div>
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-200 h-[17px] w-[17px] rounded-[200px] ml-[-4px] mb-[10px]"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="BWU" />
                    </FormControl>
                    <p className="font-semibold">Built with us</p>
                  </div>
                  <p className="mt-[10px]">
                    Start funding your project with milestones before reaching
                    the final goal. This innovative approach builds engagement,
                    making every step towards the target a shared success.
                  </p>
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);
