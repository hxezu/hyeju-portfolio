import FeatureItem from "../FeatureItem";
import portfolioFeat1 from "@/assets/images/portfolio_feat1.png";
import portfolioFeat2 from "@/assets/images/portfolio_feat2.png";
import portfolioFeat3 from "@/assets/images/portfolio_feat3.png";

export default function PortfolioFeatures() {
  return (
    <ul className="text-[color:var(--color-gray-300)] space-y-20">
      <FeatureItem
        imgSrc={portfolioFeat1}
        alt="포트폴리오 기능 1"
        highlight="Socket.io"
        title=" 기반 접속자 수 집계"
        color="purple"
        features={[
          {
            subtitle: "이벤트 기반 접속자 수 관리",
            description:
              "서버에서 connection / disconnect 이벤트를 감지하여 viewers 값을 실시간 증감\n사용자가 접속하면 viewers++, 접속 종료 시 viewers-- 처리",
          },
          {
            subtitle: "실시간 브로드캐스트",
            description:
              "접속자 수 변동 발생 시 updateViewers 이벤트를 모든 클라이언트에 즉시 전송\n모든 클라이언트가 동일한 접속자 수 상태를 공유하도록 보장",
          },
          {
            subtitle: "클라이언트 상태 동기화",
            description:
              "클라이언트는 socket.io-client로 서버와 연결\nupdateViewers 이벤트를 수신할 때마다 React useState를 업데이트하여 UI에 즉시 반영",
          },
        ]}
      />
      <FeatureItem
        imgSrc={portfolioFeat2}
        alt="포트폴리오 기능 2"
        highlight="Render"
        title=" 무료 서버 환경 최적화"
        color="purple"
        features={[
          {
            subtitle: "서버 슬립 방지",
            description:
              "GitHub Actions 워크플로우를 작성하여 5분마다 서버에 Ping 요청\nRender 무료 서버의 비활성화 문제를 방지해 항상 응답 가능한 상태 유지",
          },
          {
            subtitle: "API 호출 절감",
            description:
              "기존 Polling(3초마다 호출) 대비 요청 횟수 약 85% 감소\n서버 리소스 낭비 방지 및 안정성 확보",
          },
        ]}
      />
      <FeatureItem
        imgSrc={portfolioFeat3}
        alt="포트폴리오 기능 3"
        highlight="커스텀 "
        title="UX 요소"
        color="purple"
        features={[
          {
            subtitle: "CustomCursor 컴포넌트",
            description:
              "마우스 위치 추적 및 hover 상태에 따른 커서 크기/효과 변경선",
          },
          {
            subtitle: "시각적 차별화",
            description:
              "mix-blend-difference 적용으로 다양한 배경에서 가독성 확보\n포트폴리오 사이트의 인터랙티브 경험 강화",
          },
        ]}
      />
    </ul>
  );
}
