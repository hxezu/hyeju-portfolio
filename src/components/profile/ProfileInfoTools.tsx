import ProfileDetailHeader from "./ProfileDetailHeader";
import Image from "next/image";
import githubImg from "@/assets/icons/github.png";
import figmaImg from "@/assets/icons/figma.png";
import slackImg from "@/assets/icons/slack.png";
import notionImg from "@/assets/icons/notion.png";
import discordImg from "@/assets/icons/discord.png";

const tools = [
  { src: githubImg, alt: "Github" },
  { src: figmaImg, alt: "Figma" },
  { src: slackImg, alt: "Slack" },
  { src: notionImg, alt: "Notion" },
  { src: discordImg, alt: "Discord" },
];

export default function ProfileInfoTools() {
  return (
    <div className="flex gap-10">
      <ProfileDetailHeader title="TOOLS" />
      <div className="flex gap-4">
        {tools.map((tool, i) => (
          <div key={i} className="w-6 h-6 relative">
            <Image
              src={tool.src}
              alt={tool.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
