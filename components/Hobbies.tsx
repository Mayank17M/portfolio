import { Music, Gamepad2, ChefHat, Mountain } from "lucide-react";

const hobbies = [
  { name: "Cooking", caption: "my emotional support activity", Icon: ChefHat },
  { name: "Hiking", caption: "for the views and the sore legs", Icon: Mountain },
  { name: "Gaming", caption: "skill issue? never.", Icon: Gamepad2 },
  { name: "Music", caption: "for every mood and every bug", Icon: Music },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="portfolio-section">
      <div className="container">
        <p className="section-label">hobbies</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {hobbies.map(({ Icon, name, caption }) => (
            <article
              key={name}
              className="brut-card group flex flex-col items-center text-center"
              style={{
                padding: "48px 32px",
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <Icon
                style={{ width: 48, height: 48, color: "#ff9d00" }}
                className="group-hover:text-[#00FFFF] transition-colors duration-200"
                aria-hidden="true"
              />
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                {name}
              </h3>
              <p style={{ fontSize: "1rem", color: "#888888", lineHeight: 1.6 }}>
                {caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
