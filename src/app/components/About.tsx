import { motion } from "motion/react";
import { Lightbulb, Users, BookOpen, Zap } from "lucide-react";

const traits = [
  {
    icon: BookOpen,
    label: "Aprendizaje autónomo",
    desc: "Constante actualización mediante proyectos propios y recursos en línea.",
  },
  {
    icon: Lightbulb,
    label: "Resolución de problemas",
    desc: "Capacidad analítica para desglosar y resolver desafíos técnicos.",
  },
  {
    icon: Users,
    label: "Trabajo en equipo",
    desc: "Comunicación efectiva y colaboración orientada a resultados.",
  },
  {
    icon: Zap,
    label: "Iniciativa",
    desc: "Proactivo en identificar oportunidades de mejora y aplicar soluciones.",
  },
];

function SectionLabel({ text }: { text: string }) {
  return (
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
        {text}
      </span>
      <div className="flex-1 h-px" style={{ background: "rgba(84,222,185,0.2)" }} />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel text="// about me" />
          <h2
            className="mb-16"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#edfae4",
              lineHeight: 1.2,
            }}
          >
            Sobre{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b0e88a, #54deb9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              mí
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="p-8 rounded-2xl mb-8"
              style={{
                background: "#0d1a07",
                border: "1px solid rgba(176, 232, 138, 0.12)",
              }}
            >
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "rgba(237, 250, 228, 0.8)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                Estudiante de secundaria técnica en computación con formación en programación y desarrollo de software.
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "rgba(237, 250, 228, 0.8)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                Me encuentro en constante aprendizaje, desarrollando proyectos propios que fortalecen mi lógica y resolución de problemas. Busco iniciar mi carrera en el área IT para aplicar mis conocimientos y seguir creciendo profesionalmente.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "3+", label: "Proyectos" },
                { value: "4+", label: "Lenguajes" },
                { value: "2025", label: "Inicio" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: "rgba(176, 232, 138, 0.05)",
                    border: "1px solid rgba(176, 232, 138, 0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#b0e88a",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "rgba(237, 250, 228, 0.5)",
                      fontSize: "0.78rem",
                      marginTop: "2px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map((trait, i) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                  className="p-5 rounded-xl group transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "#0d1a07",
                    border: "1px solid rgba(176, 232, 138, 0.1)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(176, 232, 138, 0.1)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#b0e88a" }} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      color: "#edfae4",
                      fontSize: "0.95rem",
                    }}
                  >
                    {trait.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "rgba(237, 250, 228, 0.5)",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    {trait.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
