"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center"
      style={{ paddingTop: "88px", paddingBottom: "48px", background: "transparent" }}
    >
      <div className="container" style={{ width: "100%" }}>

        {/* Outer wrapper with floating stickers */}
        <div style={{ position: "relative", width: "100%" }}>

          {/* ENGINEER sticker — top left, floating */}
          <span
            className="brut-tag sticker-float"
            style={{
              position: "absolute",
              top: "-20px",
              left: "-4px",
              zIndex: 10,
              fontSize: "0.65rem",
              padding: "8px 14px",
            }}
          >
            ENGINEER
          </span>

          {/* MBA sticker — bottom right, floating */}
          <span
            className="brut-tag brut-tag-cyan sticker-float-reverse"
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-4px",
              zIndex: 10,
              fontSize: "0.65rem",
              padding: "8px 14px",
            }}
          >
            MBA
          </span>

          {/* BROWSER FRAME */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              border: "2px solid #2a2a2a",
              borderRadius: "0px",
              boxShadow: "10px 10px 0px #000000",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
              width: "100%",
            }}
          >

            {/* Browser top bar */}
            <div
              style={{
                height: "48px",
                backgroundColor: "#141414",
                borderBottom: "2px solid #2a2a2a",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
              }}
            >
              {/* URL on left */}
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  color: "#666666",
                }}
              >
                mayankmamgain.dev {/* TODO: replace with your domain */}
              </span>

              {/* Window buttons on right */}
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  style={{
                    width: "20px", height: "20px",
                    borderRadius: "3px",
                    backgroundColor: "#ff5f56",
                    border: "none",
                    cursor: "default",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", color: "#000", fontWeight: "bold",
                  }}
                >×</button>
                <button
                  style={{
                    width: "20px", height: "20px",
                    borderRadius: "3px",
                    backgroundColor: "#ffbd2e",
                    border: "none",
                    cursor: "default",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", color: "#000", fontWeight: "bold",
                  }}
                >−</button>
                <button
                  style={{
                    width: "20px", height: "20px",
                    borderRadius: "3px",
                    backgroundColor: "#27c93f",
                    border: "none",
                    cursor: "default",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", color: "#000", fontWeight: "bold",
                  }}
                >+</button>
              </div>
            </div>

            {/* Browser content */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 280px",
                gap: "0",
                alignItems: "stretch",
              }}
            >
              {/* LEFT COLUMN */}
              <div
                style={{
                  padding: "40px 48px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* Tag row */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
                  <span className="brut-tag" style={{ fontSize: "0.6rem", padding: "8px 14px" }}>
                    SOFTWARE ENGINEER
                  </span>
                  <span className="brut-tag brut-tag-cyan" style={{ fontSize: "0.6rem", padding: "8px 14px" }}>
                    MBA STUDENT
                  </span>
                </div>

                {/* Heading — Press Start 2P pixel font */}
                <div style={{ marginBottom: "20px" }}>
                  <h1
                    style={{
                      fontFamily: "var(--font-press-start)",
                      fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                      fontWeight: "400",
                      lineHeight: "1.4",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    HEY, I&apos;M
                  </h1>
                  <h1
                    style={{
                      fontFamily: "var(--font-press-start)",
                      fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                      fontWeight: "400",
                      lineHeight: "1.4",
                      color: "#ff9d00",
                      textTransform: "uppercase",
                    }}
                  >
                    MAYANK MAMGAIN. {/* TODO: replace with real name */}
                  </h1>
                </div>

                {/* Orange HR */}
                <div
                  style={{
                    width: "80px",
                    height: "4px",
                    backgroundColor: "#ff9d00",
                    marginBottom: "28px",
                  }}
                />

                {/* Bio */}
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "1.0625rem",
                    color: "#aaaaaa",
                    lineHeight: "1.75",
                    maxWidth: "520px",
                    marginBottom: "36px",
                  }}
                >
                  I used to write production code for a bank, and now I&apos;m learning why the bank exists. The useful part is living in both worlds: shipping reliable software and asking better questions about the business problems behind it.
                  {/* TODO: replace with real bio */}
                </p>

                {/* CONTACT ME button */}
                <div>
                  <a
                    href="#contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: "#ff9d00",
                      color: "#000000",
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "0.9rem",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "16px 32px",
                      border: "2px solid #ff9d00",
                      borderRadius: "3px",
                      textDecoration: "none",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "transparent";
                      el.style.color = "#ff9d00";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "#ff9d00";
                      el.style.color = "#000000";
                    }}
                  >
                    CONTACT ME
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN — orange photo panel */}
              <div
                style={{
                  backgroundColor: "#ff9d00",
                  padding: "24px",
                  paddingBottom: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  position: "relative",
                  maxHeight: "480px",
                }}
              >
                {/* Photo box */}
                <div
                  style={{
                    width: "100%",
                    height: "280px",
                    backgroundColor: "#1a1a1a",
                    border: "3px solid #000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#555555",
                    fontSize: "0.875rem",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Your Photo {/* TODO: replace with <Image /> */}
                </div>

                {/* Social buttons at bottom of orange panel */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "24px",
                    right: "24px",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="https://github.com/Mayank17M" /* TODO: add GitHub URL */
                    aria-label="GitHub"
                    style={{
                      width: "48px", height: "48px",
                      backgroundColor: "#000000",
                      border: "2px solid #000000",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ff9d00",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mayank-mamgain-652a091ba/" /* TODO: add LinkedIn URL */
                    aria-label="LinkedIn"
                    style={{
                      width: "48px", height: "48px",
                      backgroundColor: "#000000",
                      border: "2px solid #000000",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ff9d00",
                      transition: "all 0.15s ease",
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

        {/* TICKER BAR below browser frame */}
        <div
          style={{
            marginTop: "32px",
            backgroundColor: "#ff9d00",
            overflow: "hidden",
            padding: "12px 0",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              whiteSpace: "nowrap",
              animation: "ticker 22s linear infinite",
            }}
          >
            {[1, 2].map(i => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-press-start)",
                  fontSize: "0.55rem",
                  color: "#000000",
                  letterSpacing: "0.12em",
                }}
              >
                &nbsp;&nbsp;★ SOFTWARE ENGINEER &nbsp;&nbsp;★ MBA STUDENT &nbsp;&nbsp;★ BASED IN BENGALURU &nbsp;&nbsp;★ OPEN TO OPPORTUNITIES &nbsp;&nbsp;★ BUILDING THINGS &nbsp;&nbsp;★ HSBC ALUMNI &nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
