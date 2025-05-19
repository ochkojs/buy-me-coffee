"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { uploadImage } from "@/app/utils/image-uploads";
import { CircleX, Image } from "lucide-react";

interface ImageUploadProps {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
}

export const ImageUpload = ({ handleFileChange, file }: ImageUploadProps) => {
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    console.log(objectUrl);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  console.log(preview, "Preview");

  const handleFileChangess = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };
  console.log(file);

  const handleOnClick = async (file?: File) => {
    if (!file) {
      console.log("Зургаа оруулна уу");
      return;
    }
    const imageUrl = await uploadImage(file);
    console.log(imageUrl, "Imageurl");
  };

  return (
    <div className="flex flex-col w-100">
      <div className="w-full max-w-md mx-auto">
        {preview ? (
          <div className="relative">
            <CircleX color="white" className="absolute w-auto mr-0 mt-5" />
            <img
              src={preview}
              alt="Preview"
              className="w-full max-w-md mx-auto"
            />
          </div>
        ) : (
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-40 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-blue-400 hover:bg-blue-50"
          >
            <Image />
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-medium text-blue-600">Choose a file</span>{" "}
              or drag & drop it here
            </p>

            <input
              id="file-upload"
              onChange={handleFileChange}
              type="file"
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );
};
