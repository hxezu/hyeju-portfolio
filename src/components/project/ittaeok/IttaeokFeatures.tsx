import ittaeokFeat1 from "@/assets/images/ittaeok_feat1.png";
import ittaeokFeat2 from "@/assets/images/ittaeok_feat2.png";
import ittaeokFeat3 from "@/assets/images/ittaeok_feat3.png";
import ittaeokFeat4 from "@/assets/images/ittaeok_feat4.png";
import FeatureItem from "../FeatureItem";
import Image from "next/image";

export default function IttaeokFeatures() {
  return (
    <ul className="text-[color:var(--color-gray-300)] space-y-20">
      <FeatureItem
        imgSrc={ittaeokFeat1}
        alt="이때어때 기능 1"
        highlight="사용자 인증"
        title="기능 구현"
        color="blue"
        features={[
          {
            subtitle: "소셜 로그인 플로우 설계 및 구현",
            description:
              "Google / Kakao OAuth 2.0 기반 로그인 후 콜백 페이지에서 인증 상태를 확인하고 홈 화면으로 리디렉션",
          },
          {
            subtitle: "인증 및 API 통신 최적화",
            description:
              "Axios Instance와 HttpOnly 쿠키 기반 인증 구현, 인터셉터로 API 에러와 사용자 상태 관리",
          },
          {
            subtitle: "사용자 데이터 패칭 최적화",
            description:
              "TanStack Query로 로그인 사용자 정보를 효율적으로 패칭하고 불필요한 호출 최소화",
          },
          {
            subtitle: "콜백 페이지 및 라우팅 흐름 관리",
            description: "로그인 성공/실패에 따라 자동 리다이렉트 처리",
          },
        ]}
      />
      <FeatureItem
        imgSrc={ittaeokFeat2}
        alt="이때어때 기능 2"
        highlight="오프라인 일정 관리"
        title="페이지 구현"
        color="blue"
        features={[
          {
            subtitle: "UI 분기 처리 및 카카오 지도 연동",
            description:
              "일정에 지정된 장소 유무에 따라 UI를 분기 처리하고, 카카오 맵 API를 연동하여 지도와 상세 내용을 화면에 렌더링",
          },
          {
            subtitle: "모임 장소 검색 기능",
            description:
              "사용자의 입력값 기반으로 카카오 장소 검색 API를 호출하고, debounce 기법을 적용해 불필요한 API 요청 최소화",
          },
          {
            subtitle: "지도 마커 표시",
            description:
              "선택된 장소의 위도/경도를 기준으로 지도에 커스텀 마커를 표시하고, 위치 정보를 직관적으로 제공",
          },
          {
            subtitle: "실시간 데이터 반영",
            description:
              "TanStack Query를 활용해 편집된 장소 정보를 실시간으로 반영하여 사용자에게 즉각적인 피드백 제공",
          },
        ]}
      />
      <FeatureItem
        imgSrc={ittaeokFeat3}
        alt="이때어때 기능 3"
        highlight="대시보드 & 사용자 일정"
        title=" 관리 기능"
        color="blue"
        features={[
          {
            subtitle: "선택 날짜 기반 일정 조회",
            description:
              "사용자가 달력에서 선택한 날짜를 기준으로 개인 및 그룹 일정을 조회하도록 구현",
          },
          {
            subtitle: "월 단위 데이터 캐싱",
            description:
              "월 단위로 일정 데이터를 불러오고 TanStack Query를 활용해 캐싱하여, 동일 월 내 반복 요청을 방지하고 API 호출 최적화",
          },
          {
            subtitle: "불필요한 렌더링 최소화",
            description:
              "select 옵션을 활용해 월 전체 데이터 중 선택된 날짜의 일정만 추출, 필요 없는 컴포넌트 리렌더링을 최소화",
          },
          {
            subtitle: "실시간 데이터 동기화",
            description:
              "사용자의 일정 삭제 혹은 그룹 일정으로 이관 시 invalidateQueries를 활용하여 클라이언트 상태를 즉시 갱신하여 최신 정보를 제공",
          },
        ]}
      />

      <li className="flex space-x-15 items-center">
        <Image
          src={ittaeokFeat4}
          alt="이때어때 기능 4"
          className="w-[180px] h-auto"
        />
        <div className="space-y-5">
          <h3 className="text-[color:var(--color-gray-500)] text-xl font-bold">
            디자인 시스템 및
            <strong className="text-[color:var(--color-blue)] "> UI/UX </strong>
            설계 총괄
          </h3>
          <ul className="space-y-4 font-medium text-[color:var(--color-gray-500)]">
            <li>• 컴포넌트 기반 UI 디자인 시스템 구축 (톤앤매너 정립)</li>
            <li>• 반응형을 고려한 UI/UX 전반 구조 설계</li>
            <li>• 3D 시각 요소 제작 및 인터랙션 적용</li>
          </ul>
          <h3 className="text-[color:var(--color-gray-500)] text-xl font-bold">
            기타
          </h3>
          <ul className="space-y-4 font-medium text-[color:var(--color-gray-500)]">
            <li>• 그룹 생성/수정/삭제 기능 구현</li>
            <li>• 개인 일정을 그룹 일정으로 이관하는 기능 로직 설계</li>
            <li>• 404 페이지 및 일정 유형 선택 페이지 구현</li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
