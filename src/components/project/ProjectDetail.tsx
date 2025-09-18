import { ProjectData } from "@/types/project";
import ProjectBanner from "./ProjectBanner";
import ProjectDescription from "./ProjectDescription";
import ProjectFeatures from "./ProjectFeatures";
import ProjectLinks from "./ProjectLinks";
import ProjectPeriod from "./ProjectPeriod";
import ProjectStacks from "./ProjectStacks";
import ProjectType from "./ProjectType";

interface ProjectProps {
  project: ProjectData;
}

export default function ProjectDetail({ project }: ProjectProps) {
  return (
    <main className="w-full pb-30">
      <ProjectBanner
        name={project.prjName}
        bio={project.bio}
        banner={project.banner}
        font={project.font}
        gradient={project.gradient}
      />
      <div className="w-[90vw] max-w-[1232px] mx-auto space-y-10 mt-60 ">
        <ProjectDescription description={project.description} />
        <ProjectPeriod period={project.period} />
        <ProjectType type={project.type} />
        <ProjectLinks links={project.links} />
        <ProjectStacks stacks={project.stacks} />
        <ProjectFeatures />
      </div>
    </main>
  );
}
