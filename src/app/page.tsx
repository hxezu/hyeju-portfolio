"use client";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Profile from "@/components/profile/Profile";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="cursor-none">
      <CustomCursor />
      <Header />
      <Intro />
      <Profile />
      <Projects />
      <Contact />
    </main>
  );
}
