"use client";
import { ProjectData } from "@/types/project";
import ProjectBanner from "./ProjectBanner";
import ProjectDescription from "./ProjectDescription";
import ProjectFeatures from "./ProjectFeatures";
import ProjectLinks from "./ProjectLinks";
import ProjectPeriod from "./ProjectPeriod";
import ProjectStacks from "./ProjectStacks";
import ProjectType from "./ProjectType";
import BackButton from "./BackButton";
import { motion } from "framer-motion";

interface ProjectProps {
  project: ProjectData;
}

export default function ProjectDetail({ project }: ProjectProps) {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="w-full pb-30">
      <BackButton />
      <ProjectBanner
        name={project.prjName}
        bio={project.bio}
        banner={project.banner}
        font={project.font}
        gradient={project.gradient}
      />
      <div className="w-[90vw] max-w-[1232px] mx-auto space-y-10 mt-60 ">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProjectDescription description={project.description} />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProjectPeriod period={project.period} />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProjectType type={project.type} />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProjectLinks links={project.links} />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProjectStacks stacks={project.stacks} />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ProjectFeatures id={project.id} />
        </motion.div>
      </div>
    </main>
  );
}
