"use client";
import ProfileInfoContact from "./ProfileInfoContact";
import ProfileInfoEdu from "./ProfileInfoEdu";
import ProfileInfoKeywords from "./ProfileInfoKeywords";
import ProfileInfoSkills from "./ProfileInfoSkills";
import ProfileInfoTools from "./ProfileInfoTools";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ["easeOut"] },
  },
};

export default function ProfileInfoDetails() {
  return (
    <motion.div
      className="w-full flex-1 flex flex-col justify-center items-center px-5 md:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="space-y-10">
        <motion.div variants={itemVariants}>
          <ProfileInfoContact />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProfileInfoEdu />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProfileInfoKeywords />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProfileInfoSkills />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProfileInfoTools />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
