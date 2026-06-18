"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "40px",
        background: "transparent",
      }}
    >
      <div className="container" style={{ width: "100%" }}>

        {/* Ticker bar ABOVE the browser frame */}
        <div style={{
          backgroundColor: "#ff9d00",
          overflow: "hidden",
          padding: "10px 0",
          marginBottom: "24px",
        }}>
          <div style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            animation: "ticker 22s linear infinite",
          }}>
            {[1, 2].map(i => (
              <span key={i} style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#000000",
                letterSpacing: "0.08em",
              }}>
                &nbsp;&nbsp;★ SOFTWARE ENGINEER &nbsp;&nbsp;★ MBA STUDENT &nbsp;&nbsp;★ BASED IN BENGALURU &nbsp;&nbsp;★ OPEN TO OPPORTUNITIES &nbsp;&nbsp;★ BUILDING THINGS &nbsp;&nbsp;★ HSBC ALUMNI &nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* Outer wrapper — position relative for stickers */}
        <div style={{ position: "relative" }}>

          {/* ENGINEER sticker — outside frame, top-left, floating */}
          <span
            className="brut-tag sticker-float"
            style={{
              position: "absolute",
              top: "-14px",
              left: "20px",
              zIndex: 20,
              fontSize: "0.55rem",
              padding: "6px 12px",
              fontFamily: "var(--font-press-start)",
            }}
          >
            ENGINEER
          </span>

          {/* MBA sticker — outside frame, bottom-right, floating */}
          <span
            className="brut-tag brut-tag-cyan sticker-float-reverse"
            style={{
              position: "absolute",
              bottom: "-14px",
              right: "20px",
              zIndex: 20,
              fontSize: "0.55rem",
              padding: "6px 12px",
              fontFamily: "var(--font-press-start)",
            }}
          >
            MBA
          </span>

          {/* BROWSER FRAME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              border: "2px solid #2a2a2a",
              borderRadius: "0px",
              boxShadow: "8px 8px 0px #000000",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
            }}
          >
            {/* Browser top bar */}
            <div style={{
              height: "44px",
              backgroundColor: "#141414",
              borderBottom: "2px solid #2a2a2a",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
            }}>
              <span style={{
                fontFamily: "monospace",
                fontSize: "0.875rem",
                color: "#666666",
              }}>
                mayankmamgain.dev {/* TODO: replace */}
              </span>
              <div style={{ display: "flex", gap: "8px" }}>
                {[
                  { color: "#ff5f56", label: "×" },
                  { color: "#ffbd2e", label: "−" },
                  { color: "#27c93f", label: "+" },
                ].map(btn => (
                  <div key={btn.label} style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: btn.color,
                  }} />
                ))}
              </div>
            </div>

            {/* Content grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
            }}>

              {/* LEFT — content */}
              <div style={{
                padding: "48px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>

                {/* Tags */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "24px", flexWrap: "wrap" }}>
                  <span className="brut-tag" style={{ fontSize: "0.55rem", padding: "6px 12px", fontFamily: "var(--font-press-start)" }}>
                    SOFTWARE ENGINEER
                  </span>
                  <span className="brut-tag brut-tag-cyan" style={{ fontSize: "0.55rem", padding: "6px 12px", fontFamily: "var(--font-press-start)" }}>
                    MBA STUDENT
                  </span>
                </div>

                {/* Heading */}
                <div style={{ marginBottom: "16px" }}>
                  <h1 style={{
                    fontFamily: "var(--font-bungee)",
                    fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)",
                    fontWeight: "400",
                    lineHeight: "1.05",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    margin: "0 0 4px 0",
                  }}>
                    HEY, I&apos;M
                  </h1>
                  <h1 style={{
                    fontFamily: "var(--font-bungee)",
                    fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)",
                    fontWeight: "400",
                    lineHeight: "1.05",
                    color: "#ff9d00",
                    textTransform: "uppercase",
                    margin: "0",
                  }}>
                    MAYANK MAMGAIN. {/* TODO: replace */}
                  </h1>
                </div>

                {/* Orange line */}
                <div style={{
                  width: "64px",
                  height: "3px",
                  backgroundColor: "#ff9d00",
                  marginBottom: "24px",
                }} />

                {/* Bio */}
                <p style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  color: "#aaaaaa",
                  lineHeight: "1.75",
                  maxWidth: "500px",
                  marginBottom: "32px",
                }}>
                  I used to write production code for a bank, and now I&apos;m learning why the bank exists. The useful part is living in both worlds: shipping reliable software and asking better questions about the business problems behind it.
                  {/* TODO: replace bio */}
                </p>

                {/* CTA Button */}
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    backgroundColor: "#ff9d00",
                    color: "#000000",
                    fontFamily: "var(--font-bungee)",
                    fontSize: "1rem",
                    fontWeight: "400",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "14px 28px",
                    border: "2px solid #ff9d00",
                    borderRadius: "3px",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#ff9d00";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "#ff9d00";
                    e.currentTarget.style.color = "#000000";
                  }}
                >
                  CONTACT ME
                </a>
              </div>

              {/* RIGHT — orange photo panel, self-contained, does not stretch */}
              <div style={{
                backgroundColor: "#ff9d00",
                padding: "12px",
                paddingBottom: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                alignSelf: "center",
                margin: "auto 24px auto 0",
                width: "220px",
                flexShrink: 0,
              }}>
                {/* Photo box */}
                <div style={{
                  width: "100%",
                  height: "240px",
                  backgroundColor: "#1c1c1c",
                  border: "3px solid #000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#555555",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-inter)",
                }}>
                  <Image
                    src="/photo.jpeg"
                    alt="Mayank Mamgain"
                    width={220}
                    height={280}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                    priority
                  />
                </div>

                {/* Social buttons row */}
                <div style={{
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                  width: "100%",
                }}>
                  <a
                    href="https://github.com/Mayank17M" /* TODO: add GitHub URL */
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "52px",
                      height: "52px",
                      backgroundColor: "#00FFFF",
                      border: "2px solid #000000",
                      borderRadius: "0px",
                      boxShadow: "3px 3px 0px #000000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      transition: "all 0.15s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = "#000000";
                      e.currentTarget.style.color = "#00FFFF";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "#00FFFF";
                      e.currentTarget.style.color = "#000000";
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mayank-mamgain-652a091ba/" /* TODO: add LinkedIn URL */
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "52px",
                      height: "52px",
                      backgroundColor: "#00FFFF",
                      border: "2px solid #000000",
                      borderRadius: "0px",
                      boxShadow: "3px 3px 0px #000000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      transition: "all 0.15s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = "#000000";
                      e.currentTarget.style.color = "#00FFFF";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "#00FFFF";
                      e.currentTarget.style.color = "#000000";
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
