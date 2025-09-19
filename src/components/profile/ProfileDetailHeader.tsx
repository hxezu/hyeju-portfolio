interface ProfileDetailHeaderProps {
  title: string;
}
export default function ProfileDetailHeader({
  title,
}: ProfileDetailHeaderProps) {
  return (
    <div className="w-[100px] text-lg">
      <h1 className="font-semibold text-base">{title}</h1>
    </div>
  );
}
