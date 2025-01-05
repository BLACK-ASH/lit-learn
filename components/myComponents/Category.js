"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const CategoryInput = ({ selectedCategory, onChange }) => {
  const categories = [
    "English Literature",
    "Poetry Analysis",
    "Grammar Tips",
    "Essay Writing",
    "Exam Preparation",
    "Literary Criticism",
    "Personal Development",
    "Creative Writing",
    "Public Speaking",
    "Personal Growth",
    "Others"
  ];

  return (
    <div>
      <Label htmlFor="category">Category</Label>
      <Select value={selectedCategory} onValueChange={onChange}>
        <SelectTrigger className="mt-2 w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryInput;
