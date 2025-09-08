type KeywordItemProps = {
  keyword: string;
};

export default function KeywordItem({ keyword }: KeywordItemProps) {
  return (
    <div className="border-1 flex px-4 py-1 rounded-full gap-1">
      #<span> {keyword}</span>
    </div>
  );
}
