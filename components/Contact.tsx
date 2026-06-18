const footerLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "CURRENTLY", href: "#currently" },
  { label: "HOBBIES", href: "#hobbies" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16"
      style={{ background: "#00FFFF", color: "#000" }}
    >
      <div className="container">
        {/* Top row */}
        <div className="flex justify-between items-start gap-10 flex-wrap">
          {/* Left — version badge + copyright box */}
          <div>
            <span
              className="inline-block"
              style={{
                fontFamily: "var(--font-press-start)",
                fontSize: "0.5rem",
                border: "2px solid #000",
                background: "transparent",
                color: "#000",
                padding: "6px 12px",
                borderRadius: 2,
              }}
            >
              PORTFOLIO V1.0 {/* TODO update version */}
            </span>
            <div
              className="mt-3 inline-block"
              style={{
                fontFamily: "var(--font-press-start)",
                fontSize: "0.55rem",
                background: "#000",
                color: "#fff",
                padding: "14px 20px",
                borderRadius: 2,
              }}
            >
              COPYRIGHT 2026 Mayank Mamgain {/* TODO replace name */}
            </div>
          </div>

          {/* Right — social links */}
          <div>
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-press-start)",
                fontSize: "0.5rem",
                color: "#000",
              }}
            >
              FIND ME ON
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/Mayank17M" /* TODO replace with GitHub URL */
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex items-center justify-center transition-colors duration-200 hover:bg-black"
                style={{
                  width: 48,
                  height: 48,
                  border: "2px solid #000",
                  background: "transparent",
                  borderRadius: 3,
                  color: "#000",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:text-[#00FFFF] transition-colors"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-mamgain-652a091ba/" /* TODO replace with LinkedIn URL */
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex items-center justify-center transition-colors duration-200 hover:bg-black"
                style={{
                  width: 48,
                  height: 48,
                  border: "2px solid #000",
                  background: "transparent",
                  borderRadius: 3,
                  color: "#000",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:text-[#00FFFF] transition-colors"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-12 pt-6 flex justify-between items-center flex-wrap gap-4"
          style={{ borderTop: "2px solid rgba(0,0,0,0.2)" }}
        >
          <div className="flex gap-2 flex-wrap">
            {footerLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="uppercase transition-colors duration-150 hover:bg-black hover:text-[#00FFFF]"
                style={{
                  fontFamily: "var(--font-press-start)",
                  fontSize: "0.45rem",
                  border: "2px solid #000",
                  background: "transparent",
                  color: "#000",
                  padding: "8px 12px",
                  borderRadius: 2,
                  display: "inline-block",
                }}
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-sm text-black/50">
            Made with ☕ and mild existential dread.
          </p>
        </div>
      </div>
    </section>
  );
}
