"use client";
import React, { useState } from "react";
import { useCampaignForm } from "./useForm";
import { Step3 } from "@/components/create/formFields/Step3";
import { Step2 } from "@/components/create/formFields/Step2";
import { Step1 } from "@/components/create/formFields/Step1";
import { Step0 } from "@/components/create/formFields/Step0";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CampaignPreview from "@/components/create/CampaignPreview";

export default function CampaignCreate() {
  const { form, onSubmit, setSelectedFile } = useCampaignForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [campaignTitle, setCampaignTitle] = useState("");

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step0 control={form.control} />;
      case 1:
        return (
          <Step1 control={form.control} setCampaignTitle={setCampaignTitle} />
        );
      case 2:
        return <Step2 control={form.control} />;
      case 3:
        return <Step3 setSelectedFile={setSelectedFile} />;
      default:
        return null;
    }
  };

  return (
    <main className="mt-[55px] p-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex min-h-[600px] p-5 bg-white rounded-lg">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 h-full grid content-between"
            >
              <p>Step {currentStep}</p>
              {renderStep()}

              {currentStep < 3 && (
                <Button type="button" className="w-[fit-content]" onClick={nextStep}>
                  Continue
                </Button>
              )}
              {currentStep === 3 && (
                <Button type="submit">Create campaign</Button>
              )}
            </form>
          </Form>
        </div>
      <CampaignPreview campaignTitle={campaignTitle} />
    </main>
  );
}
