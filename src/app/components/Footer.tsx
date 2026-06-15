import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: "1px solid rgba(176, 232, 138, 0.1)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background: "rgba(176, 232, 138, 0.12)",
                border: "1px solid rgba(176, 232, 138, 0.25)",
              }}
            >
              <Terminal size={13} style={{ color: "#b0e88a" }} />
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#b0e88a",
                fontSize: "0.82rem",
              }}
            >
              Julián Bollinger
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              {
                icon: Github,
                href: "https://github.com/Jubiito1",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/julián-bollinger-73a5143a5/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:bollingerjulianguido@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  color: "rgba(237, 250, 228, 0.4)",
                  background: "rgba(176, 232, 138, 0.05)",
                  border: "1px solid rgba(176, 232, 138, 0.1)",
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              color: "rgba(237, 250, 228, 0.3)",
              fontSize: "0.78rem",
            }}
          >
            © 2026 Julián Bollinger. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
