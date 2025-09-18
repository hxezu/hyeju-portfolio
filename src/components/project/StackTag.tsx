export default function StackTag({ stack }: { stack: string }) {
  return (
    <div className="text-[color:var(--color-gray-400)] bg-[color:var(--color-bg-200)] font-medium space-x-1 px-4 py-2 rounded-lg">
      <span>#</span>
      <span>{stack}</span>
    </div>
  );
}
