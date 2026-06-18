"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-bungee)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: "400", color: "#ff9d00", textTransform: "uppercase", marginBottom: "32px" }}>
          ABOUT
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="brut-card" style={{ padding: "48px 56px" }}>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "1.125rem",
                color: "#cccccc",
                lineHeight: 1.9,
              }}
            >
              <p style={{ marginBottom: "20px" }}>
                I used to write production code for a bank, and now I&apos;m learning why the bank
                exists. The useful part is living in both worlds: shipping reliable software
                and asking better questions about the business problems behind it.
                {/* TODO replace with real bio */}
              </p>
              <p style={{ marginBottom: "20px" }}>
                My work has mostly sat around dependable systems, clean interfaces, and
                cross-functional problem solving. I like building things that make complicated
                workflows feel calmer than they actually are.
                {/* TODO replace with real bio */}
              </p>
              <p>
                Outside the editor, I&apos;m studying management, strategy, and the
                inconvenient truth that not every clever solution is a useful one. This
                portfolio is a snapshot while that thinking is still evolving.
                {/* TODO replace with real bio */}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
