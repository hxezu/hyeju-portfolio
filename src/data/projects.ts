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
    theme: "blue",
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
    troubleshootings: [
      {
        title: "대시보드 API 호출 최적화",
        description:
          "사용자가 달력에서 날짜를 선택할 때마다 매번 개별 API 요청이 발생하며, 동일한 월 내 여러 날짜를 빠르게 선택할 경우 중복 호출이 빈번하게 발생하여 불필요한 네트워크 사용으로 지연 시간이 늘어나고 사용자 경험이 저하되는 문제가 있었습니다.",
        solution: [
          "개선 전: 날짜 단위 요청(GET main-page?date=YYYY-MM-DD)과 일부 queryKey 캐싱 사용 → 월 변경 시 전체 요청 반복",
          "개선 후: 한 달 단위 데이터 선요청(GET /main-page/calendar?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD) 후 클라이언트에서 선택된 날짜 필터링",
          'queryKey를 월 단위(["dashboard","schedules", YYYY-MM])로 통일하여 중복 호출 방지',
        ],
        outcome: [
          "API 호출 횟수 약 79% 감소 (월 평균 1.2회 → 0.25회)",
          "평균 응답 시간 약 95% 개선 (6,210ms → 312ms)",
          "데이터 전송량 불필요 전송 99% 제거",
          "사용자 대기시간 후속 요청 100% 개선",
        ],
        learnings: [
          "Tanstack Query queryKey 전략을 활용한 프론트엔드 성능 최적화 경험",
          "클라이언트 필터링으로 백엔드 부하 감소 및 UX 향상 방법 학습",
          "사용자 행동 패턴 기반 데이터 요청 최적화 경험 축적",
          "실전 프로젝트에서 데이터 효율성과 사용자 경험을 동시에 개선하는 방법 이해",
        ],
      },
      {
        title: "카카오맵 API 호출 최적화",
        description:
          "사용자가 모임 장소를 입력할 때마다 searchDestination()이 즉시 호출되면서 중복 요청이 발생하여 결과 목록이 깜빡이고 응답 속도가 느려져 사용자 경험이 저하되었으며, 카카오 API 호출 횟수 제한으로 인해 불필요한 요청이 비용과 성능 측면 모두에서 문제를 일으켰습니다.",
        solution: [
          "개선 전: 입력할 때마다 API 호출 → 실시간 검색 응답은 빠르지만 불필요한 API 요청이 과도하게 발생",
          "개선 후: Enter 키 입력 또는 검색 아이콘 클릭 시에만 searchHandler() 실행 → 요청 횟수는 줄었지만 실시간 검색 피드백 부재로 UX 저하",
          "Debounce 적용 (setTimeout + clearTimeout) → 사용자가 입력을 멈춘 뒤 일정 시간(300ms)이 지나야 검색 실행, 중간 타이핑 시 이전 요청 취소되어 효율적이면서 UX 유지",
        ],
        outcome: [
          "API 호출 횟수 약 79% 감소 (기존: 최대 4~5회/초 → Debounce: 1회 이하/초)",
          "사용자 UX 개선: 부드럽고 안정적인 반응 (기존: 깜빡임 존재, 수동 호출: 느림)",
          "구현 복잡도: 중간 수준으로 유지 (기존: 간단, 수동 호출: 가장 간단)",
        ],
        learnings: [
          "debounce 기법은 실시간 인터랙션에서도 속도 저하 없이 효율적으로 API 호출을 제어할 수 있음",
          "특히 외부 API 사용 시 요금.트래픽 부담을 줄이는데 매우 중요",
          "불필요한 호출은 줄이되, 사용성은 유지하는 균형 잡한 UX 설계 필요",
        ],
      },
    ],
  },
  cosmos: {
    id: "cosmos",
    banner: cosmosBanner,
    thumbnail: cosmosImg,
    background: cosmosBg,
    font: "yapari",
    prjName: "COSMOS",
    theme: "green",
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
    troubleshootings: [
      {
        title: "대시보드 API 호출 최적화",
        description:
          "사용자가 달력에서 날짜를 선택할 때마다 매번 개별 API 요청이 발생하며, 동일한 월 내 여러 날짜를 빠르게 선택할 경우 중복 호출이 빈번하게 발생하여 불필요한 네트워크 사용으로 지연 시간이 늘어나고 사용자 경험이 저하되는 문제가 있었습니다.",
        solution: [
          "개선 전: 날짜 단위 요청(GET main-page?date=YYYY-MM-DD)과 일부 queryKey 캐싱 사용 → 월 변경 시 전체 요청 반복",
          "개선 후: 한 달 단위 데이터 선요청(GET /main-page/calendar?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD) 후 클라이언트에서 선택된 날짜 필터링",
          'queryKey를 월 단위(["dashboard","schedules", YYYY-MM])로 통일하여 중복 호출 방지',
        ],
        outcome: [
          "API 호출 횟수 약 79% 감소 (월 평균 1.2회 → 0.25회)",
          "평균 응답 시간 약 95% 개선 (6,210ms → 312ms)",
          "데이터 전송량 불필요 전송 99% 제거",
          "사용자 대기시간 후속 요청 100% 개선",
        ],
        learnings: [
          "Tanstack Query queryKey 전략을 활용한 프론트엔드 성능 최적화 경험",
          "클라이언트 필터링으로 백엔드 부하 감소 및 UX 향상 방법 학습",
          "사용자 행동 패턴 기반 데이터 요청 최적화 경험 축적",
          "실전 프로젝트에서 데이터 효율성과 사용자 경험을 동시에 개선하는 방법 이해",
        ],
      },
      {
        title: "카카오맵 API 호출 최적화",
        description:
          "사용자가 모임 장소를 입력할 때마다 searchDestination()이 즉시 호출되면서 중복 요청이 발생하여 결과 목록이 깜빡이고 응답 속도가 느려져 사용자 경험이 저하되었으며, 카카오 API 호출 횟수 제한으로 인해 불필요한 요청이 비용과 성능 측면 모두에서 문제를 일으켰습니다.",
        solution: [
          "개선 전: 날짜 단위 요청(GET main-page?date=YYYY-MM-DD)과 일부 queryKey 캐싱 사용 → 월 변경 시 전체 요청 반복",
          "개선 후: 한 달 단위 데이터 선요청(GET /main-page/calendar?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD) 후 클라이언트에서 선택된 날짜 필터링",
          'queryKey를 월 단위(["dashboard","schedules", YYYY-MM])로 통일하여 중복 호출 방지',
        ],
        outcome: [
          "API 호출 횟수 약 79% 감소 (월 평균 1.2회 → 0.25회)",
          "평균 응답 시간 약 95% 개선 (6,210ms → 312ms)",
          "데이터 전송량 불필요 전송 99% 제거",
          "사용자 대기시간 후속 요청 100% 개선",
        ],
        learnings: [
          "debounce 기법은 실시간 인터랙션에서도 속도 저하 없이 효율적으로 API 호출을 제어할 수 있음",
          "특히 외부 API 사용 시 요금.트래픽 부담을 줄이는데 매우 중요",
          "불필요한 호출은 줄이되, 사용성은 유지하는 균형 잡한 UX 설계 필요",
        ],
      },
    ],
  },
  portfolio: {
    id: "portfolio",
    prjName: "PORTFOLIO",
    thumbnail: portfolioImg,
    background: portfolioBg,
    font: "electrolize",
    theme: "purple",
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
    troubleshootings: [
      {
        title: "대시보드 API 호출 최적화",
        description:
          "사용자가 달력에서 날짜를 선택할 때마다 매번 개별 API 요청이 발생하며, 동일한 월 내 여러 날짜를 빠르게 선택할 경우 중복 호출이 빈번하게 발생하여 불필요한 네트워크 사용으로 지연 시간이 늘어나고 사용자 경험이 저하되는 문제가 있었습니다.",
        solution: [
          "개선 전: 날짜 단위 요청(GET main-page?date=YYYY-MM-DD)과 일부 queryKey 캐싱 사용 → 월 변경 시 전체 요청 반복",
          "개선 후: 한 달 단위 데이터 선요청(GET /main-page/calendar?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD) 후 클라이언트에서 선택된 날짜 필터링",
          'queryKey를 월 단위(["dashboard","schedules", YYYY-MM])로 통일하여 중복 호출 방지',
        ],
        outcome: [
          "API 호출 횟수 약 79% 감소 (월 평균 1.2회 → 0.25회)",
          "평균 응답 시간 약 95% 개선 (6,210ms → 312ms)",
          "데이터 전송량 불필요 전송 99% 제거",
          "사용자 대기시간 후속 요청 100% 개선",
        ],
        learnings: [
          "Tanstack Query queryKey 전략을 활용한 프론트엔드 성능 최적화 경험",
          "클라이언트 필터링으로 백엔드 부하 감소 및 UX 향상 방법 학습",
          "사용자 행동 패턴 기반 데이터 요청 최적화 경험 축적",
          "실전 프로젝트에서 데이터 효율성과 사용자 경험을 동시에 개선하는 방법 이해",
        ],
      },
      {
        title: "카카오맵 API 호출 최적화",
        description:
          "사용자가 모임 장소를 입력할 때마다 searchDestination()이 즉시 호출되면서 중복 요청이 발생하여 결과 목록이 깜빡이고 응답 속도가 느려져 사용자 경험이 저하되었으며, 카카오 API 호출 횟수 제한으로 인해 불필요한 요청이 비용과 성능 측면 모두에서 문제를 일으켰습니다.",
        solution: [
          "개선 전: 날짜 단위 요청(GET main-page?date=YYYY-MM-DD)과 일부 queryKey 캐싱 사용 → 월 변경 시 전체 요청 반복",
          "개선 후: 한 달 단위 데이터 선요청(GET /main-page/calendar?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD) 후 클라이언트에서 선택된 날짜 필터링",
          'queryKey를 월 단위(["dashboard","schedules", YYYY-MM])로 통일하여 중복 호출 방지',
        ],
        outcome: [
          "API 호출 횟수 약 79% 감소 (월 평균 1.2회 → 0.25회)",
          "평균 응답 시간 약 95% 개선 (6,210ms → 312ms)",
          "데이터 전송량 불필요 전송 99% 제거",
          "사용자 대기시간 후속 요청 100% 개선",
        ],
        learnings: [
          "debounce 기법은 실시간 인터랙션에서도 속도 저하 없이 효율적으로 API 호출을 제어할 수 있음",
          "특히 외부 API 사용 시 요금.트래픽 부담을 줄이는데 매우 중요",
          "불필요한 호출은 줄이되, 사용성은 유지하는 균형 잡한 UX 설계 필요",
        ],
      },
    ],
  },
};
