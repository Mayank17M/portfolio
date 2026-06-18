const rows = [
  { icon: "📍", label: "Based in", value: "Delhi, India" },
  { icon: "📖", label: "Reading", value: "The room — I read the room pretty well" }, // TODO replace
  { icon: "📺", label: "Watching", value: "The Office — it's basically a case study" }, // TODO replace
  { icon: "🛠️", label: "Building", value: "This portfolio (meta, I know)" },
  { icon: "🧠", label: "Learning", value: "That money doesn't grow on git branches" }, // TODO replace
];

export default function Currently() {
  return (
    <section id="currently" className="portfolio-section">
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-bungee)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: "400", color: "#ff9d00", textTransform: "uppercase", marginBottom: "32px" }}>
          CURRENTLY
        </h2>
        <div className="brut-card relative" style={{ padding: "48px 52px" }}>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className="grid items-center"
              style={{
                gridTemplateColumns: "36px 140px 1fr",
                padding: "20px 0",
                fontSize: "1rem",
                borderBottom: i < rows.length - 1 ? "1px solid #1e1e1e" : "none",
              }}
            >
              <span
                style={{ fontSize: "1.25rem", opacity: 0.7 }}
                aria-hidden="true"
              >
                {row.icon}
              </span>
              <span
                className="font-mono"
                style={{ fontSize: "0.9375rem", color: "#666", minWidth: 140 }}
              >
                {row.label}
              </span>
              <span style={{ fontSize: "1rem", color: "#e0e0e0" }}>
                {row.value}
              </span>
            </div>
          ))}

          <p className="absolute bottom-4 right-5 text-[0.75rem] text-[#444]">
            Last updated: June 2026 {/* TODO update monthly */}
          </p>
        </div>
      </div>
    </section>
  );
}
