# 현혜주 – 프론트엔드 개발자 포트폴리오

![Portfolio Preview](https://github.com/user-attachments/assets/1491add2-29fd-4f95-b875-f6a2215ba6d6)

> Next.js와 TailwindCSS를 활용해 제작한 인터랙티브 포트폴리오입니다.

---

## 🖤 프로젝트 소개

이 포트폴리오는 **프론트엔드 개발자로서의 역량**을 보여주기 위해 제작했습니다.

- 프로젝트별 상세 페이지와 썸네일 구성
- 스크롤 기반 애니메이션 및 SVG 인터랙션
- 커스텀 커서와 부드러운 사용자 경험
- 실시간 방문자 수 확인 기능 (Socket.io)
- 최신 프론트엔드 스택 적용 (Next.js, TailwindCSS, TypeScript 등)

---

## ⚡ 주요 기능

### Intro

- 스크롤 시 등장하는 텍스트 애니메이션
- SVG Path 기반의 선 그리기 인터랙션

### About

- 개발자 현혜주 소개 및 주요 역량 정리
- Peer Review : 프로젝트 익명 피드백 공유

### Projects

- 프로젝트별 썸네일 + 상세 페이지 구성
- 상세 페이지 내 소개, 담당 기능, 트러블 슈팅 경험 기록

### Contact

- 이메일 주소 및 마무리 메시지 제공

---

### 🛠 사용 기술

| 프론트엔드           | 스타일링                   | 폰트             | 도구    |
| -------------------- | -------------------------- | ---------------- | ------- |
| Next.js (App Router) | TailwindCSS                | Pretendard       | VS Code |
| React                | CSS 애니메이션 / Keyframes | Cormorant Infant | GitHub  |
| TypeScript           | SVG 애니메이션             |                  | Figma   |
| Socket.io           | Framer Motion             |                  | Render/Vercel   |


---

### 🔗 배포 및 자동화

- Wake Render Server: 5분마다 서버 상태 ping
- Socket.io 서버: 실시간 접속자 수 처리
- 배포: Render, Vercel

```yaml
name: Wake Render Server

on:
  schedule:
    - cron: "*/5 * * * *" # 5분마다 실행
  workflow_dispatch: # 수동 실행 가능

jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Ping Render server
        run: curl -X GET https://hyeju-portfolio.onrender.com

```
