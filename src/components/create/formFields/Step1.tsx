import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link"; // Don't forget to import Link from next/link for the description part

interface Step1Props {
  control: any;
  setCampaignTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const Step1: React.FC<Step1Props> = ({ control, setCampaignTitle }) => (
  <>
    {/* Title Field */}
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>First, how is your campaign called?</FormLabel>
          <FormControl>
            <Input
              placeholder="Campaign Title"
              {...field}
              onChange={(e) => {
                field.onChange(e); // Call the form's field onChange
                setCampaignTitle(e.target.value); // Update state variable
              }}
            />
          </FormControl>
          <FormDescription>This is your public campaign name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    {/* Category Field */}
    <FormField
      control={control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Category</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a category for your project" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="FinTech">FinTech</SelectItem>
              <SelectItem value="GameFi">GameFi</SelectItem>
              <SelectItem value="Web3">Web3</SelectItem>
              <SelectItem value="EduHealth">EduHealth</SelectItem>
            </SelectContent>
          </Select>
          <FormDescription>
            You can manage email addresses in your{" "}
            <Link href="/examples/forms">email settings</Link>.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    {/* Description Field */}
    <FormField
      control={control}
      name="bio"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us a little bit about yourself"
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormDescription>
            You can <span>@mention</span> other users and organizations.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
