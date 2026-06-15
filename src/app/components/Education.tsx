import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
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
              // education
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
            Formación{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b0e88a, #54deb9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Académica
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl">
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #b0e88a30, #54deb920, transparent)" }}
          />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative pl-16"
          >
            <div
              className="absolute left-0 top-6 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #b0e88a20, #54deb920)",
                border: "1px solid rgba(176, 232, 138, 0.3)",
              }}
            >
              <GraduationCap size={18} style={{ color: "#b0e88a" }} />
            </div>

            <div
              className="p-7 rounded-2xl"
              style={{
                background: "#0d1a07",
                border: "1px solid rgba(176, 232, 138, 0.12)",
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      color: "#edfae4",
                      fontSize: "1.15rem",
                      lineHeight: 1.3,
                    }}
                  >
                    Escuela Técnica N°35
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "#7aad5c",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                    }}
                  >
                    "Ing. Eduardo Latzina"
                  </p>
                </div>
                <div
                  className="px-3 py-1.5 rounded-full flex items-center gap-2"
                  style={{
                    background: "rgba(84, 222, 185, 0.1)",
                    border: "1px solid rgba(84, 222, 185, 0.2)",
                  }}
                >
                  <Calendar size={12} style={{ color: "#54deb9" }} />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#54deb9",
                      fontSize: "0.72rem",
                    }}
                  >
                    2021 – 2026
                  </span>
                </div>
              </div>

              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-5"
                style={{
                  background: "rgba(176, 232, 138, 0.08)",
                  border: "1px solid rgba(176, 232, 138, 0.2)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "#b0e88a",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  Técnico en Computación
                </span>
                <span
                  className="px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(176, 232, 138, 0.15)",
                    color: "#b0e88a",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                  }}
                >
                  en curso
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "rgba(237, 250, 228, 0.6)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                Formación en programación, lógica computacional y desarrollo de software.
              </p>

              <div
                className="flex items-center gap-2 mt-5 pt-5"
                style={{ borderTop: "1px solid rgba(176, 232, 138, 0.08)" }}
              >
                <MapPin size={13} style={{ color: "rgba(237, 250, 228, 0.35)" }} />
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "rgba(237, 250, 228, 0.35)",
                    fontSize: "0.82rem",
                  }}
                >
                  Buenos Aires, Argentina
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
