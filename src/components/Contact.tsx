export default function Contact({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
  return (
    <section
      className={`${className} h-screen bg-[color:var(--color-black)] text-[color:var(--color-white)] relative`}
      id={id}
    >
      <div className="flex flex-col pl-20 pt-30 gap-10">
        <div className="text-9xl ">
          <span className="font-cormorant">Thank You</span>
          <p>
            For <span className="font-cormorant">Your time.</span>
          </p>
        </div>

        <div className="space-y-2">
          <p>소중한 시간 내주셔서 감사합니다.</p>
          <p>현혜주였습니다.</p>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full flex justify-between px-15 py-8 text-sm text-[color:var(--color-gray-100)]">
        <a href="mailto:hailey_apple@icloud.com">hailey_apple@icloud.com</a>
        <span>© Copyright 2025. hyejuhyun all rights reserved.</span>
        <span>Frontend Developer</span>
      </footer>
    </section>
  );
}
