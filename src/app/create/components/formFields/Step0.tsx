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
    <p className="font-semibold text-[50px] mb-[30px] leading-tight tracking-[-0.03em]">
      Let's start by choosing the{" "}
      <span className="bg-gradient-to-r from-blue-500 to-cyan-200 bg-clip-text inline-block text-transparent">
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
              className="grid grid-cols-2 w-full"
            >
              <FormItem className="flex flex-col">
                <FormLabel className="font-normal hover:cursor-pointer rounded-xl border-[1px] border-[white]/[0.1] hover:bg-[white]/[0.1] p-5 ">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-200 h-[17px] w-[17px] rounded-[200px] ml-[-2px] mb-[10px]"></div>

                  <div className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="Classic" />
                    </FormControl>
                    <p className="font-semibold">Classic campaign</p>
                  </div>
                  <p className="mt-[10px]">Set a clear financial target, then exceed it to unlock extra rewards. This traditional model boosts ongoing support by offering additional value as you surpass goals.</p>
                </FormLabel>
              </FormItem>
              <FormItem className="flex flex-col">
                <FormLabel className="font-normal hover:cursor-pointer rounded-xl border-[1px] border-[white]/[0.1] hover:bg-[white]/[0.1] p-5 ">
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
                  <p className="mt-[10px]">Start funding your project with milestones before reaching the final goal. This innovative approach builds engagement, making every step towards the target a shared success.</p>
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
