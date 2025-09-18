"use client";

import { useEffect, useRef, useState } from "react";

export default function Intro({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
        else setInView(false);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${className} bg-[color:var(--color-black)] flex items-center pl-15 overflow-hidden relative w-full h-screen  text-white ${
        inView ? "motion" : ""
      }`}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1668.87 818.85"
          overflow="visible"
        >
          <path
            id="svgAni01"
            d="M222.5,549.5s281-261,257-380S130.87,682.62,187.18,689.56,348.5,500.5,370.5,518.5s-48,124,4,123c0,0,87,19,195-78"
          />
          <path
            id="svgAni02"
            d="M606.5,554.5s-45-12-43,31,58-50,58-50-32,69-11,89,80,43,206-61c0,0,3-5,22-32s-116,224,193,39c0,0,329-338,265-404s-402,608-296,670,492-305,492-305"
          />
          <path
            id="svgAni03"
            d="M1462.5,570.5s46-9,43-30-104,52-21,84,195-70,195-70l-6-11s21-7-6,61,76-74,91-61-71,372-211,419-6-194,297-405"
          />
          <path id="svgAni04" d="M865.5,480.5s-18,4-12,10,26-5,12-7" />
        </svg>
      </div>

      <div className="absolute left-[60px] bottom-[40px]">Scroll Down</div>
    </section>
  );
}
