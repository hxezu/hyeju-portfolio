"use client";

import { useEffect, useRef, useState } from "react";

export default function HaileySvg() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
        else setInView(false);
      },
      { threshold: 0.3 }
    );
    const current = svgRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);
  return (
    <svg
      ref={svgRef}
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
  );
}
