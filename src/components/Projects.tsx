import { projects } from "@/data/projects";
import ProjectTumbnail from "./project/ProjectThumbnail";

export default function Projects({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${className} snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen`}
    >
      {Object.values(projects).map((project, i) => (
        <div key={i} id={project.id} className="h-screen snap-start">
          <ProjectTumbnail
            index={i + 1}
            id={project.id}
            imgSrc={project.thumbnail}
            prjName={project.prjName}
            bio={project.bio}
            font={project.font}
            bg={project.background}
          />
        </div>
      ))}
    </section>
  );
}
