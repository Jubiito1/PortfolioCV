import { motion } from "motion/react";

const languages = [
  {
    name: "Español",
    level: "Nativo",
    percent: 100,
    flag: "🇦🇷",
    desc: "Lengua materna",
  },
  {
    name: "Inglés",
    level: "Intermedio",
    percent: 60,
    flag: "🇺🇸",
    desc: "Lectura técnica fluida · Conversacional básico",
  },
];

export function Languages() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#54deb9",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              // languages
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(84,222,185,0.2)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#edfae4",
              lineHeight: 1.2,
            }}
          >
            Idiomas
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-6 rounded-2xl"
              style={{
                background: "#0d1a07",
                border: "1px solid rgba(176, 232, 138, 0.1)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: "1.5rem" }}>{lang.flag}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600,
                        color: "#edfae4",
                        fontSize: "1rem",
                      }}
                    >
                      {lang.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#b0e88a",
                        fontSize: "0.7rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {lang.level}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#54deb9",
                    fontSize: "1rem",
                    fontWeight: 700,
                  }}
                >
                  {lang.percent}%
                </div>
              </div>

              <div
                className="w-full rounded-full overflow-hidden mb-3"
                style={{ height: "5px", background: "rgba(176, 232, 138, 0.08)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  style={{
                    height: "100%",
                    borderRadius: "9999px",
                    background: `linear-gradient(90deg, #b0e88a, #54deb9)`,
                  }}
                />
              </div>

              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "rgba(237, 250, 228, 0.45)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                }}
              >
                {lang.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
