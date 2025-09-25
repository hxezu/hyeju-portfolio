import { StaticImageData } from "next/image";

export interface ProfileData {
  name: string;
  contacts: { tag: string; content: string }[];
  skills: { src: StaticImageData; alt: string }[];
  tools: { src: StaticImageData; alt: string }[];
  keywords: string[];
  educations: { tag: string; content: string }[];
}
