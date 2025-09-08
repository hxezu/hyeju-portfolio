type KeywordItemProps = {
  keyword: string;
};

export default function KeywordItem({ keyword }: KeywordItemProps) {
  return (
    <div className="border-1 flex px-3 py-1 rounded-full gap-1 text-xs text-[color:var(--color-gray-100)]">
      #<span> {keyword}</span>
    </div>
  );
}
