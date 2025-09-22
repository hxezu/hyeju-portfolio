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
        title: "이미지 · 폰트 리소스 용량 최적화",
        description:
          "메인 시각 요소로 사용된 우주 관련 이미지 용량이 수 MB에 달하고 폰트(TTF/OTF) 용량도 500KB 이상으로 지나치게 커서 초기 로딩 지연이 발생하고, 주요 콘텐츠보다 리소스 로딩 대기 시간이 우선되어 LCP가 늦어지며 UX가 저하되고 트래픽 부담도 증가했습니다.",
        solution: [
          "이미지 WebP 변환 (손실률 -q 75 기준, cwebp CLI 사용)",
          "폰트 woff2 변환 (Transfonter 사용)",
          "불필요한 리소스를 제거하고 용량 최적화를 통해 초기 로딩 속도 향상",
        ],
        outcome: [
          "이미지 용량 5.54MB → 445KB, 약 91.9% 절감",
          "폰트 용량 2.0MB → 43KB, 약 97.9% 절감",
          "전체 리소스 7.5MB 이상 → 488KB, 약 93.5% 용량 감소",
          "초기 로딩 속도와 LCP 크게 개선, 사용자 체감 성능 향상",
        ],
        learnings: [
          "WebP와 woff2 변환을 통해 대용량 리소스 최적화 경험",
          "웹 성능 개선에서 이미지와 폰트 최적화가 UX와 트래픽 효율에 큰 영향을 미침",
          "프론트엔드에서 리소스 효율화 전략을 설계하고 적용하는 실무 경험 습득",
        ],
      },
      {
        title: "콘텐츠 번역 비용 및 속도 최적화",
        description:
          "영어로 된 우주 관련 콘텐츠를 번역·요약하기 위해 매번 OpenAI/Gemini API를 호출하며, 동일한 콘텐츠임에도 페이지 접근 시마다 중복 요청이 발생해 대량 번역 시 속도 지연과 API 사용량 과다로 인해 비용이 증가하는 문제가 발생했습니다.",
        solution: [
          "개선 전: 매 컴포넌트 렌더링 시 useEffect 내에서 번역용 API 호출→ 이미 번역한 데이터도 매번 새로 요청되어 리소스 낭비",
          "개선 후: 콘텐츠 별 ID(date) 기반 캐싱 로직 적용 → Supabase `translations` 테이블 생성",
          "→ 요청 시 해당 날짜의 번역 결과가 Supabase에 존재하는지 먼저 조회",
          "→ 없을 경우에만 API 요청 후 Supabase에 저장",
        ],
        outcome: [
          "요청 속도: 평균 2~3초 이상 → 100~200ms 수준",
          "API 비용: 불필요한 중복 요청 다수 → 약 70% 이상 절감",
          "UX 반응성: 느림(로딩 빈도 높음) → 대부분 캐시로 빠른 응답",
          "코드 유지보수: 중복 요청 처리 로직 필요 → 단순화 및 재사용 용이",
        ],
        learnings: [
          "캐싱 전략을 통해 외부 API 호출 빈도를 줄이면 비용과 성능을 동시에 개선할 수 있음",
          "데이터베이스(Supabase) 기반 캐시를 활용하면 중복 호출을 체계적으로 관리 가능",
          "API 호출 최소화와 UX 반응성 사이의 균형 중요",
        ],
      },
      {
        title: "게시물 내 댓글 실시간성 부여",
        description:
          "커뮤니티 내 게시글에서 사용자가 댓글을 작성해도 실시간으로 반영되지 않아, 다른 사용자의 댓글을 확인하려면 새로고침이 필요하며, 이로 인해 사용자 간 상호작용이 단절되고 커뮤니케이션 흐름이 끊겨 사용자 경험이 저하되었습니다.",
        solution: [
          "개선 전: 댓글 작성은 클라이언트 상태만 갱신, 조회는 fetchCommentsByPostId(postId)로 별도 요청 → 실시간 반영 불가",
          "개선 후: Supabase Realtime 채널 도입",
          "→ INSERT, DELETE 이벤트 구독으로 자동 상태 업데이트",
          "→ 작성자 외 사용자도 새로고침 없이 댓글 확인 가능",
        ],
        outcome: [
          "실시간 댓글 반영으로 커뮤니티 몰입도와 상호작용 개선",
          "클라이언트 단 로직 단순화 (자동 상태 업데이트)",
          "새로고침 의존도 제거로 UX 전반 개선",
        ],
        learnings: [
          "Supabase Realtime은 channel 및 postgres_changes 구독만으로 간단히 실시간 시스템 구축 가능",
          "실시간 처리는 사용자 간 상호작용을 강화하고 커뮤니티 경험에 필수적임",
          "실시간 로직 적용 시 중복 반영 방지 및 구독 해제(clean-up) 관리가 중요함",
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
        title: "접속자 수 집계 방식 개선 ",
        description:
          "초기에는 3초마다 /api/viewers를 호출하는 Polling 방식으로 접속자 수를 관리했으나, Render 무료 서버 특성상 불필요한 요청이 누적되면서 응답 지연과 다운타임이 발생하였습니다.",
        solution: [
          "WebSocket 기반 Socket.io 로 전환하여 이벤트 발생 시점에만 접속자 수 업데이트",
          "서버에서 연결/해제 이벤트 감지 후 모든 클라이언트에 즉시 브로드캐스트",
          "GitHub Actions 워크플로우를 추가해 5분마다 Ping → 서버 슬립 방지",
        ],
        outcome: [
          "API 호출 횟수 약 85% 감소",
          "접속자 반영 속도 3초 지연 → 실시간(0ms 체감)",
          "서버 다운타임 월 10~15회 → 0회",
          "사용자 경험(UX) 개선",
        ],
        learnings: [
          "Polling과 WebSocket의 차이를 이해하고 불필요한 요청 최소화 방법 습득",
          "Socket.io를 활용한 실시간 아키텍처 설계 경험",
          "Github Actions 로 서버 가용성을 유지하며 CI/CD 파이프라인 구축 경험",
          "전체 서비스 라이프사이클(개발→배포→운영) 경험 습득",
        ],
      },
    ],
  },
};
