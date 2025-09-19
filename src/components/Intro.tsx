import HaileySvg from "./HaileySvg";

export default function Intro({ className }: { className?: string }) {
  return (
    <section
      className={`${className} bg-[color:var(--color-black)] flex items-center pl-15 overflow-hidden relative w-full h-screen  text-white`}
    >
      <div className="text-9xl font-light leading-[1.2] inline-block overflow-hidden">
        <p>
          <span>FE Developer</span>
        </p>
        <p>
          <span className="font-cormorant">Hyeju Hyun</span>
        </p>
        <p>
          <span>Portfolio</span>
        </p>
      </div>

      <div className="svgAni absolute top-[25%] right-[5%] w-[55%] rotate-[-30deg]">
        <HaileySvg />
      </div>

      <div className="absolute left-[60px] bottom-[40px]">Scroll Down</div>
    </section>
  );
}
