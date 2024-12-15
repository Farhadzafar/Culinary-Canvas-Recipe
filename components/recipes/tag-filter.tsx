"use client";

import { Badge } from "@/components/ui/badge";

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export function TagFilter({ tags, selectedTags, onToggleTag }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={selectedTags.includes(tag) ? "default" : "secondary"}
          className="cursor-pointer"
          onClick={() => onToggleTag(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}