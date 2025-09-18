import { ProjectData } from "@/types/project";

import ittaeokImg from "@/assets/images/mockup_ittaeok.svg";
import ittaeokBg from "@/assets/images/background_ittaeok.svg";
import ittaeokBanner from "@/assets/images/ittaeok_iphone.png";

import cosmosImg from "@/assets/images/mockup_cosmos.svg";
import cosmosBg from "@/assets/images/background_cosmos.png";
import cosmosBanner from "@/assets/images/cosmos_iphone.png";

import portfolioImg from "@/assets/images/mockup_portfolio.svg";
import portfolioBg from "@/assets/images/background_portfolio.svg";
import portfolioBanner from "@/assets/images/portfolio_mac.png";

export const projects: Record<string, ProjectData> = {
  ittaeok: {
    id: "ittaeok",
    thumbnail: ittaeokImg,
    background: ittaeokBg,
    font: "tttogether",
    banner: ittaeokBanner,
    prjName: "이때어때",
    bio: "효율적인 일정 조율을 위한 통합 스케줄링 플랫폼",
    description: "효율적인 일정 조율을 위한 통합 스케줄링 플랫폼",
    period: "2025.06. - 2025.08.",
    type: "팀 프로젝트 (FrontEnd 5명, BackEnd 5명)",
    links: {
      github:
        "https://github.com/prgrms-web-devcourse-final-project/WEB4_5_DOD_FE",
      website: "https://www.ittaeok.com",
    },
    stacks: [
      "Next.js v15",
      "Typescript",
      "Tanstack Query",
      "TailwindCSS",
      "zustand",
      "framer-motion",
    ],
    gradient: "from-[#2481FF] to-[#FFF]",
  },
  cosmos: {
    id: "cosmos",
    banner: cosmosBanner,
    thumbnail: cosmosImg,
    background: cosmosBg,
    font: "yapari",
    prjName: "COSMOS",
    bio: "우주 콘텐츠 큐레이션 및 커뮤니티 플랫폼",
    description: "우주 콘텐츠 큐레이션 및 커뮤니티 플랫폼",
    period: "2025.05. - 2025.06.",
    type: "팀 프로젝트 (FrontEnd 5명)",
    links: {
      github: "https://github.com/prgrms-fe-devcourse-cosmos/cosmos",
      website: "https://devcourse-cosmos.netlify.app/",
    },
    stacks: [
      "React",
      "Typescript",
      "TailwindCSS",
      "zustand",
      "Supabase",
      "GSAP",
      "Three.js",
    ],
    gradient: "from-[#000428] to-[#fff]",
  },
  portfolio: {
    id: "portfolio",
    prjName: "PORTFOLIO",
    thumbnail: portfolioImg,
    background: portfolioBg,
    font: "electrolize",
    banner: portfolioBanner,
    bio: "개인 포트폴리오 사이트",
    description: "개인 포트폴리오 사이트",
    period: "2025.09. - 진행 중",
    type: "개인 프로젝트",
    links: {
      github: "https://github.com/hxezu/hyeju-portfolio",
      website: "https://www.hxezu.com/",
    },
    stacks: [
      "Next.js v15",
      "Typescript",
      "TailwindCSS",
      "Socket.io",
      "Vercel",
      "Render",
      "Github Actions",
    ],
    gradient: "from-[#000000] to-[#fff]",
  },
};
