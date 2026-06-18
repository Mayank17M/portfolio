"use client";

import { motion } from "framer-motion";

const techSkills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "REST APIs",
  "Git",
  "Docker",
]; // TODO replace with real skills

const mbaSkills = [
  "Business Strategy",
  "Financial Analysis",
  "Marketing Management",
  "Operations",
  "Data-Driven Decision Making",
]; // TODO replace with real skills

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const chipVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="container">
        <p className="section-label">skills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillColumn title="TECHNICAL" skills={techSkills} variant="tech" />
          <SkillColumn title="MBA" skills={mbaSkills} variant="mba" />
        </div>
      </div>
    </section>
  );
}

function SkillColumn({
  title,
  skills,
  variant,
}: {
  title: string;
  skills: string[];
  variant: "tech" | "mba";
}) {
  return (
    <div className="brut-card" style={{ padding: "44px 48px" }}>
      <h3
        className="section-heading"
        style={{ fontSize: "1.5rem", marginBottom: "24px" }}
      >
        {title}
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap"
        style={{ gap: 12 }}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={chipVariants}
            className={[
              "cursor-default bg-[#111] border border-[#2a2a2a] text-[#888]",
              "transition-colors duration-150",
              variant === "tech"
                ? "hover:border-[#ff9d00] hover:text-[#ff9d00]"
                : "hover:border-[#00FFFF] hover:text-[#00FFFF]",
            ].join(" ")}
            style={{
              padding: "10px 20px",
              fontSize: "0.9375rem",
              borderRadius: 6,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
