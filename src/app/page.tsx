import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Profile from "@/components/profile/Profile";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="cursor-none h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Intro className="snap-start" />
      <Profile id="about" className="snap-start" />
      <Projects id="projects" className="snap-start" />
      <Contact id="contact" className="snap-start" />
    </main>
  );
}
