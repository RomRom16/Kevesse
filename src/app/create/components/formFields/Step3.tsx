import React from "react";
import { Input } from "@/components/ui/input"; // Adjust according to your actual import paths
import { Label } from "@/components/ui/label";


interface Step3Props {
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export const Step3: React.FC<Step3Props> = ({ setSelectedFile }) => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="picture">Picture</Label>
    <Input
      id="picture"
      type="file"
      onChange={(e) => {
        if (e.target.files && e.target.files[0]) {
          setSelectedFile(e.target.files[0]);
        } else {
          console.error("No file selected");
          setSelectedFile(null);
        }
      }}
    />
  </div>
);
