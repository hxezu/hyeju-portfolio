import CosmosDetail from "@/components/project/cosmos/CosmosDetail";
import IttaeokDetail from "@/components/project/ittaeok/IttaeokDetail";
import PortfolioDetail from "@/components/project/portfolio/PortfolioDetail";

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
