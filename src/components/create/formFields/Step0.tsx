import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";


import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";

interface Step0Props {
  control: any;
}

export const Step0: React.FC<Step0Props> = ({ control }) => (
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
            className="flex flex-col space-y-1"
          >
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="Classic" />
              </FormControl>
              <FormLabel className="font-normal">
                Classic campaign
              </FormLabel>
            </FormItem>
            <FormItem className="flex items-center space-x-3 space-y-0">
              <FormControl>
                <RadioGroupItem value="BWU" />
              </FormControl>
              <FormLabel className="font-normal">
                Built with us
              </FormLabel>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
