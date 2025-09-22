interface TroubleTitleProps {
  title: string;
  description: string;
  color: string;
}
export default function TroubleTitle({
  title,
  description,
  color,
}: TroubleTitleProps) {
  return (
    <div className="space-y-3">
      <h3
        className="text-xl font-semibold"
        style={{ color: `var(--color-${color})` }}
      >
        {title}
      </h3>
      <span className="text-[color:var(--color-gray-200)] text-sm ">
        {description}
      </span>
    </div>
  );
}
