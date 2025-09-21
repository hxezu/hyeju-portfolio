interface ProfileDetailItemProps {
  tag: string;
  content: string;
}

export default function ProfileDetailItem({
  tag,
  content,
}: ProfileDetailItemProps) {
  const isEmail = content.includes("@");
  const isUrl = content.startsWith("http");
  const isPhone = content.match(/^\+?d[\d\s-]+$/);

  let renderedContent;

  if (isEmail) {
    renderedContent = (
      <a
        href={`mailto:${content}`}
        className="text-[color:var(--color-gray-200)] hover:underline"
      >
        {content}
      </a>
    );
  } else if (isUrl) {
    renderedContent = (
      <a
        href={content}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[color:var(--color-gray-200)] hover:underline"
      >
        {content}
      </a>
    );
  } else if (isPhone) {
    renderedContent = (
      <a
        href={`tel:${content.replace(/\s|-/g, "")}`}
        className="text-[color:var(--color-gray-200)] hover:underline"
      >
        {content}
      </a>
    );
  } else {
    renderedContent = (
      <p className="text-[color:var(--color-gray-200)]">{content}</p>
    );
  }

  return (
    <div className="w-full flex gap-4 text-xs md:text-sm">
      <h1 className="font-medium w-15 text-[color:var(--color-gray-600)] text-[12px] md:text-[14px]">
        {tag}
      </h1>
      {renderedContent}
    </div>
  );
}
