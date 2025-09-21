interface ProfileDetailHeaderProps {
  title: string;
}
export default function ProfileDetailHeader({
  title,
}: ProfileDetailHeaderProps) {
  return (
    <div className=" md:w-[100px] text-lg">
      <h1 className="font-semibold text-base">{title}</h1>
    </div>
  );
}
