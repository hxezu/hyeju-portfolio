interface ProfileDetailItemProps {
  tag: string;
  content: string;
}

export default function ProfileDetailItem({
  tag,
  content,
}: ProfileDetailItemProps) {
  return (
    <div className="w-full flex gap-4">
      <h1 className="font-bold">{tag}</h1>
      <p>{content}</p>
    </div>
  );
}
