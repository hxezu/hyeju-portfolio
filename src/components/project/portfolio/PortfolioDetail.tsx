import { projects } from "@/data/projects";
import ProjectDetail from "../ProjectDetail";

export default function PortfolioDetail() {
  return <ProjectDetail project={projects.portfolio} />;
}
