import { ProfileData } from "@/types/profile";
import cssImg from "@/assets/icons/css.png";
import htmlImg from "@/assets/icons/html.png";
import tsImg from "@/assets/icons/typescript.png";
import jsImg from "@/assets/icons/javascript.png";
import reactImg from "@/assets/icons/react.png";
import nextImg from "@/assets/icons/nextjs.png";
import tailwindImg from "@/assets/icons/tailwindcss.png";
import tanstackImg from "@/assets/icons/react-query.png";
import zustandImg from "@/assets/icons/zustand.png";
import githubImg from "@/assets/icons/github.png";
import figmaImg from "@/assets/icons/figma.png";
import slackImg from "@/assets/icons/slack.png";
import notionImg from "@/assets/icons/notion.png";
import discordImg from "@/assets/icons/discord.png";

export const profile: ProfileData = {
  name: "현혜주",
  contacts: [
    { tag: "Email", content: "hailey_apple@icloud.com" },
    { tag: "Github", content: "https://github.com/hxezu" },
    { tag: "Velog", content: "https://velog.io/@hxezu" },
    { tag: "Phone", content: "010-5058-1366" },
  ],
  skills: [
    { src: cssImg, alt: "CSS" },
    { src: htmlImg, alt: "HTML" },
    { src: tsImg, alt: "Typescript" },
    { src: jsImg, alt: "Javascript" },
    { src: reactImg, alt: "React" },
    { src: nextImg, alt: "Nextjs" },
    { src: tailwindImg, alt: "TailwindCss" },
    { src: tanstackImg, alt: "Tanstack" },
    { src: zustandImg, alt: "Zustand" },
  ],
  tools: [
    { src: githubImg, alt: "Github" },
    { src: figmaImg, alt: "Figma" },
    { src: slackImg, alt: "Slack" },
    { src: notionImg, alt: "Notion" },
    { src: discordImg, alt: "Discord" },
  ],
  keywords: ["감각적인", "다재다능한", "책임감있는", "열정적인"],
  educations: [
    { tag: "2020.02", content: "삼성여자고등학교 졸업" },
    { tag: "2020.03", content: "건국대학교 컴퓨터공학부 입학" },
    {
      tag: "2023.09",
      content: "Czech Technical University in Prague 교환학생",
    },
    { tag: "2025.02", content: "Programmers Devcourse Front-End 4th" },
  ],
};
