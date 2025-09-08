interface ProfileDetailItemProps {
  tag: string;
  content: string;
}

export default function ProfileDetailItem({
  tag,
  content,
}: ProfileDetailItemProps) {
  return (
    <div className="w-full flex gap-4 text-sm">
      <h1 className="font-medium w-15 text-[color:var(--color-gray-300)]">
        {tag}
      </h1>
      <p className="text-[color:var(--color-gray-200)]">{content}</p>
    </div>
  );
}
