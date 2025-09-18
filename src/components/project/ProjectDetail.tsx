import ProjectBanner from "./ProjectBanner";
import ProjectDescription from "./ProjectDescription";
import ProjectFeatures from "./ProjectFeatures";
import ProjectLinks from "./ProjectLinks";
import ProjectPeriod from "./ProjectPeriod";
import ProjectStacks from "./ProjectStacks";
import ProjectType from "./ProjectType";

export default function ProjectDetail() {
  return (
    <main className="w-full pb-30">
      <ProjectBanner />
      <div className="w-[90vw] max-w-[1232px] mx-auto space-y-10 mt-10 ">
        <ProjectDescription />
        <ProjectPeriod />
        <ProjectType />
        <ProjectLinks />
        <ProjectStacks />
        <ProjectFeatures />
      </div>
    </main>
  );
}
