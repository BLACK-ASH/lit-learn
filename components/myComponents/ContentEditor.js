import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import "react-quill-new/dist/quill.snow.css";

// Dynamically load React Quill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const ContentEditor = ({ content, onChange }) => {

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }], // Removed 'bullet'
      ["blockquote", "code-block"],
      ["link"], // Removed 'image'
      [{ align: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "blockquote",
    "code-block",
    "link",
    "align",
  ]; // Removed 'bullet' and 'image'

  return (
    <div className="h-96 my-4 mb-8">
      <Label htmlFor="content">Content</Label>
      <ReactQuill
        id="content"
        theme="snow"
        value={content}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className=" h-[80%]"
      />
    </div>
  );
};

export default ContentEditor;
