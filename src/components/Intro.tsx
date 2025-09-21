import HaileySvg from "./HaileySvg";

export default function Intro({ className }: { className?: string }) {
  return (
    <section
      className={`${className} bg-[color:var(--color-black)] flex pt-40 xl:pt-0 xl:items-center pl-5 md:pl-10 lg:pl-15 xl:pl-20  overflow-hidden relative w-full h-screen  text-white`}
    >
      <div className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl 2xl:text-[120px] font-light leading-[1.2] inline-block overflow-hidden">
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

      <div className="svgAni absolute top-[50%] right-[15%] w-[80%] xl:top-[25%] xl:right-[5%] lg:w-[55%] rotate-[-30deg]">
        <HaileySvg />
      </div>

      <div className="absolute left-[60px] bottom-[40px]">Scroll Down</div>
    </section>
  );
}
