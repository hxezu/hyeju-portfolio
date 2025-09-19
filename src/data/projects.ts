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
    description:
      "이때어때는 When2Meet의 불편함을 개선한 통합 스케줄링 플랫폼으로, 반복적인 일정 조율 과정의 피로도를 줄이고 현실적인 일정 관리 솔루션을 제공합니다. 단순 시간 조율을 넘어 모임의 방식(온라인/오프라인) 설정, 참여자 위치 기반의 중간 장소 추천, 그리고 Figma·Notion·GitHub·Google Docs 등 다양한 워크스페이스 공유 기능을 지원합니다. 이를 통해 개인과 그룹 모두에게 유연하고 효율적인 일정 관리 경험을 제공합니다.",
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
    description:
      "Cosmos는 NASA와 전 세계 우주 커뮤니티로부터 제공되는 최신 이미지, 뉴스, 천문 이벤트를 누구나 쉽고 재미있게 접할 수 있도록 기획된 우주 정보 커뮤니티 플랫폼입니다. 단순한 정보 제공을 넘어, 사용자들이 직접 촬영한 천체 사진 공유, 영화 리뷰, 자유로운 토론 등 커뮤니티 기능을 통해 소통할 수 있습니다. 또한 퍼즐과 퀴즈 같은 게임 콘텐츠를 결합하여 우주를 친근하게 즐기고 자연스럽게 지식을 확장할 수 있는 경험을 제공합니다.",
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
    description:
      "이 포트폴리오는 프론트엔드 개발자로서의 기술 역량과 프로젝트 경험을 보여주기 위해 제작한 웹사이트입니다. 최신 스택(Next.js, TypeScript, TailwindCSS 등)을 활용하여 애니메이션, 실시간 기능(Socket.io), 프로젝트별 상세 페이지를 구현했으며, 기여도와 트러블슈팅 과정을 기록했습니다. 사용자 친화적인 인터랙션과 시각적 요소를 통해 개발 역량뿐 아니라 디자인 감각과 사용자 경험에 대한 고민을 담았습니다.",
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
