import CosmosDetail from "@/components/project/cosmos/CosmosDetail";
import IttaeokDetail from "@/components/project/ittaeok/IttaeokDetail";
import PortfolioDetail from "@/components/project/portfolio/PortfolioDetail";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  console.log("params.name:", params.name);
  console.log("projects keys:", Object.keys(projects));
  const project = projects[params.name];
  console.log("project found:", project);

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다.",
    };
  }

  return {
    title: `${project.prjName} | FE 현혜주 포트폴리오`,
    description: project.bio,
    openGraph: {
      title: `${project.prjName} | FE 현혜주 포트폴리오`,
      description: project.bio,
      url: `https://www.hxezu.com/projects/${params.name}`,
      siteName: "FRONTEND DEVELOPER HYEJU HYUN",
      images: [
        {
          url: "https://www.hxezu.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "프론트엔드 개발자 현혜주 포트폴리오",
        },
      ],
      type: "website",
    },
  };
}

const detailComponents: Record<string, React.ComponentType> = {
  ittaeok: IttaeokDetail,
  cosmos: CosmosDetail,
  portfolio: PortfolioDetail,
};
export default function ProjectDetailPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  const DetailComponent = detailComponents[name];

  if (!DetailComponent) {
    return <div>존재하지 않는 프로젝트입니다.</div>;
  }
  return <DetailComponent />;
}
