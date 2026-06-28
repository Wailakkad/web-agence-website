interface TagPillProps {
  tags: string[];
}

export const TagPills = ({ tags }: TagPillProps) => (
  <div className="flex flex-wrap gap-2 mt-4 mb-6">
    {tags.map((tag) => (
      <span
        key={tag}
        className="bg-gray-100/80 text-gray-600 text-[11px] font-medium px-3 py-1 rounded-full border border-gray-200/50"
      >
        {tag}
      </span>
    ))}
  </div>
);
