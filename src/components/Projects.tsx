import ittaeokImg from "@/assets/images/project1.png";
import cosmosImg from "@/assets/images/project2.png";
import popconImg from "@/assets/images/project3.png";
import ProjectCard from "./project/ProjectCard";

const projects = [
  {
    id: "ittaeok",
    prjName: "이때 어때",
    description: "효율적인 일정 조율을 위한 통합 스케줄링 플랫폼",
    src: ittaeokImg,
    font: "tttogether",
  },
  {
    id: "cosmos",
    prjName: "COSMOS",
    description: "우주 콘텐츠 큐레이션 및 커뮤니티 플랫폼",
    src: cosmosImg,
    font: "yapari",
  },
  {
    id: "popcon",
    prjName: "POPcon",
    description: "해외 팝송 팬들을 위한 음악 추천,\n공연 정보 제공 서비스",
    src: popconImg,
    font: "monument",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[color:var(--color-black)] flex flex-col items-center justify-center gap-5">
      <div className="grid grid-cols-3 gap-20 px-40">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            index={i + 1}
            id={project.id}
            imgSrc={project.src}
            prjName={project.prjName}
            description={project.description}
            font={project.font}
          />
        ))}
      </div>
    </section>
  );
}
