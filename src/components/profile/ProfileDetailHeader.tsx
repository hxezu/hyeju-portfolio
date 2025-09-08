interface ProfileDetailHeaderProps {
  title: string;
}
export default function ProfileDetailHeader({
  title,
}: ProfileDetailHeaderProps) {
  return (
    <>
      <h1 className="font-semibold">{title}</h1>
    </>
  );
}
