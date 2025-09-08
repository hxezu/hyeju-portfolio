import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Profile from "@/components/profile/Profile";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Intro />
      <Profile />
      <Projects />
      <Contact />
    </main>
  );
}
