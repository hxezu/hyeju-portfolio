"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function LiveViewers() {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const socket = io("/", { path: "/api/socket" });
    socket.on("updateViewers", (count: number) => {
      setViewers(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="rounded-full border border-black px-3 py-1 flex justify-center items-center">
      <span className="text-xs">👀 {viewers}명이 구경 중이에요!</span>
    </div>
  );
}
