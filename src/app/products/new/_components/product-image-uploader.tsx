"use client";

import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { Dispatch, SetStateAction } from "react";

export default function ProductImageUploader({
  file,
  onFileChange,
}: {
  file?: File;
  onFileChange: Dispatch<SetStateAction<File | undefined>>;
}) {
  return (
    <SingleImageDropzone
      value={file}
      onChange={(file) => {
        onFileChange(file);
      }}
    />
  );
}
