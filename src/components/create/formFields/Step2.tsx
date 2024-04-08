import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons"; // Ensure you have this import for the icon
import { format } from "date-fns"; // Used to format the date
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; // Popover components for the calendar
import { Calendar } from "@/components/ui/calendar"; // Calendar component for selecting a date
import { cn } from "@/lib/utils"; // Utility function for classnames
import { Input } from "@/components/ui/input";

interface Step2Props {
  control: any; // Typing for form control passed down from react-hook-form or similar library
}

export const Step2: React.FC<Step2Props> = ({ control }) => (
  <>
    {/* Deadline Field */}
    <FormField
      control={control}
      name="deadline"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Deadline</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => {
                  const today = new Date();
                  const threeDaysFromNow = new Date(
                    today.setDate(today.getDate() + 3)
                  );
                  const oneYearFromNow = new Date(
                    today.setFullYear(today.getFullYear() + 1)
                  );

                  return date < threeDaysFromNow || date > oneYearFromNow;
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>
            Minimum campaign length is 3 days, maximum is one year.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Target Field */}
    <FormField
      control={control}
      name="target"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Target</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter your target amount"
              {...field}
            />
          </FormControl>
          <FormDescription>Enter the funding target amount.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
