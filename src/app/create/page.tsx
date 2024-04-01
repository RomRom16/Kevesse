"use client";

import initializeFirebaseClient from "@/lib/initFirebase";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  Firestore,
} from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { InputFile } from "@/components/ui/input-file";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  type: z.enum(["Classic", "BWU", "none"], {
    required_error: "You need to select a notification type.",
  }),
  category: z.string({
    required_error: "Please select an email to display.",
  }),
});

export default function campaigncreate() {
  const { auth, db } = initializeFirebaseClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const campaignRef = collection(db, "campaigns");

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!auth.currentUser) {
      console.error("User not authenticated");
      return;
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Submitting values:", values);
    // This will automatically create a new document with a unique ID in the "campaigns" collection.
    addDoc(campaignRef, values)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document:", error.message);
      });
  }

  return (
    <main className="mt-[55px] p-10 grid grid-cols-2 gap-4">
      <div className="min-h-[600px] p-5 bg-white rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First, how is your campaign called ?</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public campaign name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
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
            <FormField
              control={form.control}
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
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
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
            <InputFile />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div>
        <p className="text-white">test</p>
      </div>
    </main>
  );
}
