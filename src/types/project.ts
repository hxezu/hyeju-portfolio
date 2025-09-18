import { StaticImageData } from "next/image";

export interface ProjectData {
  id: string;
  prjName: string;
  bio: string;
  banner: StaticImageData;
  thumbnail: StaticImageData;
  background: StaticImageData;
  font: string;
  description: string;
  period: string;
  type: string;
  links: {
    github?: string;
    website?: string;
  };
  stacks: string[];
  gradient: string;
}
