"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const experiences = [
  {
    side: "left" as const,
    year: "2024",
    date: "Jul 2022 – Dec 2024", // TODO replace dates
    role: "Software Engineer",
    company: "HSBC, Pune",
    bullets: [
      "Built [system name] that processed [X] transactions handling ₹[Y] in daily volume", // TODO
      "Reduced [metric] by [X]% through [approach]", // TODO
      "Led [initiative] across [X] teams resulting in [outcome]", // TODO
      "Developed [feature] used by [X] customers", // TODO
    ],
    tech: ["Python", "Jenkins", "Bash", "Splunk", "AWS", "Git"],
  },
  {
    side: "right" as const,
    year: "2022",
    date: "May 2022 – Aug 2022", // TODO
    role: "Open Source Fellow", // TODO
    company: "MLH(Major League Hacking)", // TODO
    bullets: [
      "Working on the Solana funding intiative(Solana grants) under Solana labs.", // TODO
      "Contributed to open-source projects.", // TODO
      "Worked in a team(pod). Fixed issues and reviewed PRs of fellows.", // TODO
    ],
    tech: ["Typescript", "Rust", "Ruby"], // TODO
  },
  {
    side: "left" as const,
    year: "2022",
    date: "Sep 2021 – Mar 2022", // TODO
    role: "Maintainer", // TODO
    company: "The Algorithms", // TODO
    bullets: [
      "Contributed to the open source repository for Data Structures and Algorithms and their implementations.", // TODO
      "Worked with fellow maintainers on maintaining the JavaScript and C++ repositories while closely following good open source practices.", // TODO
    ],
    tech: ["Javascript", "C++", "Typescript"], // TODO
  },
  {
    side: "right" as const,
    year: "2021",
    date: "Jun 2021 – Aug 2021", // TODO
    role: "Intern", // TODO
    company: "Adobe", // TODO
    bullets: [
      "Designed and built a tool that can monitor real time activity of users on slack and capture their availability.", // TODO
      "Worked on process improvement and contributed in writing knowledge-based articles. Worked on enhancing developer experience by re-iterating over the collective feedback.", // TODO
    ],
    tech: ["Java", "Springboot", "Typescript"], // TODO
  },
];

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="container">
        {/* Orange timeline wrapper */}
        <div
          className="relative"
          style={{
            background: "#ff9d00",
            border: "2px solid #1a1a1a",
            borderRadius: 4,
            boxShadow: "8px 8px 0 #000",
            padding: "56px 48px",
          }}
        >
          {/* Heading inside orange panel */}
          <h2
            className="section-heading"
            style={{
              color: "#000000",
              marginBottom: "48px",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            EXPERIENCE JOURNEY
          </h2>

          {/* Vertical centre line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-black"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative"
                style={{ marginBottom: i < experiences.length - 1 ? 56 : 0 }}
              >
                {/* Card — positioned left or right */}
                <div
                  style={
                    exp.side === "left"
                      ? { marginRight: "calc(50% + 24px)" }
                      : { marginLeft: "calc(50% + 24px)" }
                  }
                >
                  <div
                    className="brut-card relative"
                    style={{ padding: "36px 40px" }}
                  >
                    {/* Year badge */}
                    <span
                      className="absolute top-3 right-3 text-black"
                      style={{
                        fontFamily: "var(--font-bungee), sans-serif",
                        fontSize: "0.7rem",
                        background: "#ff9d00",
                        padding: "6px 14px",
                        borderRadius: 2,
                      }}
                    >
                      {exp.year}
                    </span>

                    {/* Date */}
                    <p
                      className="uppercase tracking-wide"
                      style={{
                        color: "#888",
                        fontSize: "0.9rem",
                        marginBottom: 12,
                      }}
                    >
                      {exp.date}
                    </p>

                    {/* Role */}
                    <p
                      className="text-white uppercase leading-relaxed"
                      style={{
                        fontFamily: "var(--font-bungee), sans-serif",
                        fontSize: "1.1rem",
                        marginBottom: 8,
                      }}
                    >
                      {exp.role}
                    </p>

                    {/* Company */}
                    <p
                      className="text-[#ff9d00] font-semibold"
                      style={{ fontSize: "1rem", marginBottom: 20 }}
                    >
                      {exp.company}
                    </p>

                    {/* Bullets */}
                    <ul style={{ marginBottom: 0 }}>
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-[#aaaaaa]"
                          style={{
                            borderLeft: "3px solid #ff9d00",
                            paddingLeft: 16,
                            fontSize: "0.9375rem",
                            lineHeight: 1.8,
                            marginBottom: 12,
                          }}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div
                      className="flex flex-wrap"
                      style={{ gap: 10, marginTop: 24 }}
                    >
                      {exp.tech.map((t, ti) => (
                        <span
                          key={`${t}-${ti}`}
                          className="font-mono text-[#ff9d00]"
                          style={{
                            background: "rgba(255,157,0,0.08)",
                            border: "1px solid rgba(255,157,0,0.25)",
                            borderRadius: 3,
                            padding: "6px 14px",
                            fontSize: "0.8rem",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dot on centre line */}
                <div
                  className="absolute rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    width: 16,
                    height: 16,
                    background: "#ff9d00",
                    border: "3px solid #000",
                    transform: "translateX(-50%) translateY(-50%)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
