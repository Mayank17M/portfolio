"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Currently", href: "#currently", id: "currently" },
  { label: "Hobbies", href: "#hobbies", id: "hobbies" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkCls = (id: string) =>
    [
      "font-[family-name:var(--font-space-grotesk)] font-bold text-[0.75rem] uppercase tracking-[0.1em]",
      "px-[18px] py-[10px] rounded-[3px] border transition-colors duration-150 whitespace-nowrap",
      active === id
        ? "bg-[#ff9d00] text-black border-[#ff9d00]"
        : "bg-[#1a1a1a] text-[#888] border-[#2a2a2a] hover:border-[#444] hover:text-[#f0f0f0]",
    ].join(" ");

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a]"
        style={{ height: 72, background: "rgba(15,15,15,0.95)", backdropFilter: "blur(8px)" }}
      >
        <div className="container h-full grid grid-cols-3 items-center">
          {/* Left — lime name badge */}
          <div>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "10px 16px",
                borderRadius: 3,
                background: "#CAFF00",
                color: "#000",
                display: "inline-block",
              }}
            >
              {/* TODO replace name */}
              ~/Mayank Mamgain
            </a>
          </div>

          {/* Centre — nav links */}
          <div className="hidden md:flex items-center justify-center gap-[8px]">
            {NAV_LINKS.map(({ label, href, id }) => (
              <a key={id} href={href} className={linkCls(id)}>
                {label}
              </a>
            ))}
          </div>

          {/* Right — icon buttons */}
          <div className="hidden md:flex items-center justify-end gap-2">
            <a
              href="https://github.com/Mayank17M" /* TODO replace with GitHub URL */
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ width: 44, height: 44 }}
              className="flex items-center justify-center border border-[#2a2a2a] bg-[#1a1a1a] rounded-[3px] text-[#888] hover:border-[#ff9d00] hover:text-[#ff9d00] transition-colors duration-150"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-mamgain-652a091ba/" /* TODO replace with LinkedIn URL */
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ width: 44, height: 44 }}
              className="flex items-center justify-center border border-[#2a2a2a] bg-[#1a1a1a] rounded-[3px] text-[#888] hover:border-[#ff9d00] hover:text-[#ff9d00] transition-colors duration-150"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{ width: 44, height: 44 }}
              className="flex items-center justify-center border border-[#2a2a2a] bg-[#1a1a1a] rounded-[3px] text-[#888] hover:border-[#ff9d00] hover:text-[#ff9d00] transition-colors duration-150"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden fixed left-0 right-0 z-40 border-b border-[#2a2a2a] py-4 px-6 flex flex-col gap-2"
          style={{ top: 72, background: "rgba(15,15,15,0.98)" }}
        >
          {NAV_LINKS.map(({ label, href, id }) => (
            <a key={id} href={href} onClick={() => setOpen(false)} className={linkCls(id)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
