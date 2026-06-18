"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="portfolio-section">
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-bungee)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: "400", color: "#ff9d00", textTransform: "uppercase", marginBottom: "32px" }}>
          EDUCATION
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-stretch"
        >
          {/* Card 1 — MBA */}
          <motion.article
            variants={cardVariants}
            className="brut-card flex-1 flex flex-col"
            style={{ borderTop: "3px solid #00FFFF", padding: "44px 40px" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-bungee)",
                fontSize: "1.25rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: 12,
              }}
            >
              MBA (Business Management)
            </h3>
            <p style={{ fontSize: "1rem", color: "#00FFFF", marginBottom: 8 }}>
              Xaviers Institute of Management
            </p>
            <p style={{ fontSize: "0.875rem", color: "#555555", marginBottom: 20 }}>
              2026 – 2028
            </p>
            <div style={{ borderTop: "2px solid #000", marginBottom: 20 }} />
            <p style={{ fontSize: "0.9rem", color: "#888888", fontStyle: "italic", lineHeight: 1.7 }}>
              Where I&apos;m learning to talk to people using frameworks.
            </p>
          </motion.article>

          {/* Card 2 — B.Tech */}
          <motion.article
            variants={cardVariants}
            className="brut-card flex-1 flex flex-col"
            style={{ borderTop: "3px solid #ff9d00", padding: "44px 40px" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-bungee)",
                fontSize: "1.25rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: 12,
              }}
            >
              B.Tech (Computer Science Engineering)
            </h3>
            <p style={{ fontSize: "1rem", color: "#ff9d00", marginBottom: 8 }}>
              Graphic Era University
            </p>
            <p style={{ fontSize: "0.875rem", color: "#555555", marginBottom: 20 }}>
              2018 – 2022
            </p>
            <div style={{ borderTop: "2px solid #000", marginBottom: 20 }} />
            <p style={{ fontSize: "0.9rem", color: "#888888", fontStyle: "italic", lineHeight: 1.7 }}>
              Where I learned to talk to computers instead of people.
            </p>
          </motion.article>

          {/* Card 3 — Schooling */}
          <motion.article
            variants={cardVariants}
            className="brut-card flex-1 flex flex-col"
            style={{ borderTop: "3px solid #CAFF00", padding: "44px 40px" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-bungee)",
                fontSize: "1.25rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: 12,
              }}
            >
              Sr. Secondary / Secondary {/* TODO: replace */}
            </h3>
            <p style={{ fontSize: "1rem", color: "#CAFF00", marginBottom: 8 }}>
              The Baptist Convent School {/* TODO: replace */}
            </p>
            <p style={{ fontSize: "0.875rem", color: "#555555", marginBottom: 20 }}>
              2014 – 2018 {/* TODO: replace */}
            </p>
            <div style={{ borderTop: "2px solid #000", marginBottom: 20 }} />
            <p style={{ fontSize: "0.9rem", color: "#888888", fontStyle: "italic", lineHeight: 1.7 }}>
              Where I learned that calculus and chemistry are optional life skills.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
