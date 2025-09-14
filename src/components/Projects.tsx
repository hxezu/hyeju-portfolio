import ittaeokImg from "@/assets/images/mockup_ittaeok.svg";
import ittaeokBg from "@/assets/images/background_ittaeok.svg";
import cosmosImg from "@/assets/images/mockup_cosmos.svg";
import cosmosBg from "@/assets/images/background_cosmos.png";
import popconImg from "@/assets/images/mockup_popcon.svg";
import popconBg from "@/assets/images/background_popcon.svg";
import ProjectTumbnail from "./project/ProjectThumbnail";

const projects = [
  {
    id: "ittaeok",
    prjName: "이때 어때",
    description: "효율적인 일정 조율을 위한 통합 스케줄링 플랫폼",
    src: ittaeokImg,
    font: "tttogether",
    background: ittaeokBg,
  },
  {
    id: "cosmos",
    prjName: "COSMOS",
    description: "우주 콘텐츠 큐레이션 및 커뮤니티 플랫폼",
    src: cosmosImg,
    font: "yapari",
    background: cosmosBg,
  },
  {
    id: "popcon",
    prjName: "POPcon",
    description: "해외 팝송 팬들을 위한 음악 추천, 공연 정보 제공 서비스",
    src: popconImg,
    font: "monument",
    background: popconBg,
  },
];

export default function Projects({ id }: { id?: string }) {
  return (
    <section id={id}>
      {projects.map((project, i) => (
        <div key={i} className="h-screen">
          <ProjectTumbnail
            index={i + 1}
            id={project.id}
            imgSrc={project.src}
            prjName={project.prjName}
            description={project.description}
            font={project.font}
            bg={project.background}
          />
        </div>
      ))}
    </section>
  );
}
