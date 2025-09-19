import CosmosFeatures from "./cosmos/CosmosFeatures";
import IttaeokFeatures from "./ittaeok/IttaeokFeatures";
import PortfolioFeatures from "./portfolio/PortfolioFeatures";
import SectionTitle from "./SectionTitle";
import notebookImg from "@/assets/icons/notebook.svg";

const featureComponents: Record<string, React.ComponentType> = {
  ittaeok: IttaeokFeatures,
  cosmos: CosmosFeatures,
  portfolio: PortfolioFeatures,
};

export default function ProjectFeatures({ id }: { id: string }) {
  const FeatureComponent = featureComponents[id];

  if (!FeatureComponent) {
    return <div>존재하지 않는 프로젝트입니다.</div>;
  }
  return (
    <div className="space-y-6">
      <SectionTitle title="구현한 기능" icon={notebookImg} />
      <div className="w-full bg-[color:var(--color-bg-100)] flex items-start p-15 rounded-3xl">
        <FeatureComponent />
      </div>
    </div>
  );
}
