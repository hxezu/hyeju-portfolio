import FeatureItem from "../FeatureItem";
import cosmosFeat1 from "@/assets/images/cosmos_feat1.png";
import cosmosFeat2 from "@/assets/images/cosmos_feat2.png";
import cosmosFeat3 from "@/assets/images/cosmos_feat3.png";
import cosmosFeat4 from "@/assets/images/cosmos_feat4.png";
import Image from "next/image";

export default function CosmosFeatures() {
  return (
    <ul className="text-[color:var(--color-gray-300)] space-y-20">
      <FeatureItem
        imgSrc={cosmosFeat1}
        alt="코스모스 기능 1"
        highlight="Supabase"
        title="핵심 기능 구현"
        color="green"
        features={[
          {
            subtitle: "데이터베이스 설계 및 ERD 구조화",
            description:
              "사용자, 게시글, 댓글, 좋아요 등 핵심 테이블을 정규화하고 관계형 모델로 구조화하여 데이터 중복을 최소화하고 조회 성능을 개선",
          },
          {
            subtitle: "실시간 댓글 동기화 (Realtime)",
            description:
              "Supabase Realtime을 활용해 댓글 작성/삭제가 즉시 반영되도록 구현하여, 새로고침 없이도 사용자 간 상호작용이 원활해짐으로써 커뮤니티 UX 개선",
          },
          {
            subtitle: "이미지 관리 (Storage)",
            description:
              "아바타 이미지 업로드·URL 저장·리셋 기능을 제공하여 개인화 경험을 강화하고 프로필 관리 편의성 향상",
          },
        ]}
      />
      <FeatureItem
        imgSrc={cosmosFeat2}
        alt="코스모스 기능 2"
        highlight="퍼즐 게임 및 랭킹"
        title=" 기능 구현 (우주 이미지 활용)"
        color="green"
        features={[
          {
            subtitle: "퍼즐 난이도 및 시간 제한 설계",
            description:
              "react-jigsaw-puzzle 라이브러리를 활용하고, 주제(Category)와 난이도(Difficulty)에 따라 퍼즐 조각 수와 제한 시간을 차등 설정하여 다양한 난이도 경험 제공",
          },
          {
            subtitle: "효율적인 게임 상태 관리",
            description:
              "Zustand를 이용해 게임 상태(퍼즐 조각, 타이머, 점수 등)를 전역으로 관리하여 렌더링 지연 없는 부드러운 상호작용 구현",
          },
          {
            subtitle: "점수 계산 및 랭킹 보드 구현",
            description:
              "퍼즐 완료 시간과 난이도 기반으로 점수를 계산하고 Supabase에 기록하여 누적 점수를 관리\n또한 실시간 점수 반영 및 랭킹 조회 기능으로 사용자 간 경쟁 유도 및 재플레이 장려",
          },
        ]}
      />
      <FeatureItem
        imgSrc={cosmosFeat3}
        alt="코스모스 기능 3"
        highlight="한글 번역 "
        title=" 시스템 구축 (영어 기반 우주 콘텐츠)"
        color="green"
        features={[
          {
            subtitle: "AI 기반 번역 및 요약 기능 구현",
            description:
              "영어로 제공되는 우주 콘텐츠를 GPT와 Gemini를 활용해 자연스럽게 한글로 번역하고 핵심 요약하여 사용자가 즉시 이해 가능, 접근성 향상 및 UX 개선",
          },
          {
            subtitle: "BLEU/BERTScore 성능 평가로 최적 번역 방식 선택",
            description:
              "번역 정확성과 자연스러움을 평가해 GPT와 Gemini 모델을 콘텐츠 특성에 맞게 사용함으로써 신뢰도 높은 번역 제공과 사용자 만족도 증가",
          },
          {
            subtitle: "Supabase 기반 캐싱 전략 적용",
            description:
              "이미 번역된 콘텐츠는 DB에서 즉시 불러와 API 호출 없이 빠르게 표시하여 속도와 비용 최적화, 페이지 로딩 시간 단축과 서버 비용 절감",
          },
        ]}
      />

      <li className="flex space-x-15 items-center">
        <Image
          src={cosmosFeat4}
          alt="코스모스 기능 4"
          className="w-[180px] h-auto"
        />
        <div className="space-y-5">
          <h3 className="text-[color:var(--color-gray-500)] text-xl font-bold">
            디자인 시스템 및
            <strong className="text-[color:var(--color-green)] ">
              {" "}
              UI/UX{" "}
            </strong>
            설계 총괄
          </h3>
          <ul className="space-y-4 font-medium text-[color:var(--color-gray-500)]">
            <li>
              • 컴포넌트 기반 UI 디자인 시스템 구축 및 반응형 UI/UX 전반 구조
              설계
            </li>
          </ul>
          <h3 className="text-[color:var(--color-gray-500)] text-xl font-bold">
            Home 랜딩 페이지 & Contact 페이지 구현
          </h3>
          <ul className="space-y-4 font-medium text-[color:var(--color-gray-500)]">
            <li>
              • GSAP ScrollTrigger을 활용해 스크롤에 따라 인터랙션이 변화하는
              랜딩 페이지를 구성하여 몰입감 있는 사용자 경험을 제공
            </li>
            <li>
              • 다크/라이트 테마에 따라 react-globe.gl, three.js 기반의
              지구(라이트) 또는 달(다크) 3D 모델이 표시되며, 마우스 움직임에
              따라 회전/확대
            </li>
            <li>• MutationObserver로 테마 변경 실시간 감지 및 적용</li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
