import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Download,
  ChevronRight,
} from "lucide-react";

const codeLines = [
  { text: "const developer = {", color: "#edfae4" },
  { text: '  name: "Julián Bollinger",', color: "#b0e88a" },
  { text: '  role: "Software Developer",', color: "#b0e88a" },
  { text: '  status: "Open to work",', color: "#54deb9" },
  { text: "  skills: [", color: "#edfae4" },
  { text: '    "Java", "C#", "JavaScript",', color: "#7aad5c" },
  { text: '    "HTML", "CSS", "SQL"', color: "#7aad5c" },
  { text: "  ],", color: "#edfae4" },
  { text: "  passion: Infinity,", color: "#54deb9" },
  { text: "};", color: "#edfae4" },
];

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#b0e88a"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #1b8c53, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
        style={{ background: "radial-gradient(circle, #54deb9, transparent)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, #b0e88a, transparent)" }}
      />
    </div>
  );
}

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 120);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="rounded-xl overflow-hidden shadow-2xl"
      style={{
        background: "#0d1a07",
        border: "1px solid rgba(176, 232, 138, 0.18)",
        boxShadow: "0 0 40px rgba(176, 232, 138, 0.06)",
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: "1px solid rgba(176, 232, 138, 0.1)" }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: "#ff5f57" }}
        />
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: "#febc2e" }}
        />
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: "#28c840" }}
        />
        <span
          className="ml-2"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "rgba(237, 250, 228, 0.4)",
            fontSize: "0.72rem",
          }}
        >
          developer.ts
        </span>
      </div>
      <div className="p-5 space-y-1">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              color: line.color,
              lineHeight: "1.6",
              whiteSpace: "pre",
            }}
          >
            {line.text}
          </div>
        ))}
        {visibleLines < codeLines.length && (
          <div
            className="inline-block w-2 h-4 animate-pulse"
            style={{ background: "#b0e88a", verticalAlign: "middle" }}
          />
        )}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "5rem" }}
    >
      <GridBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(84, 222, 185, 0.1)",
                  border: "1px solid rgba(84, 222, 185, 0.25)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#54deb9" }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#54deb9",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  DISPONIBLE PARA TRABAJAR
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#edfae4",
              }}
              className="mb-2"
            >
              <span
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  display: "block",
                }}
              >
                Julián
              </span>
              <span
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  display: "block",
                  background: "linear-gradient(135deg, #b0e88a, #54deb9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Bollinger
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-4"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#b0e88a",
                fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                letterSpacing: "0.02em",
              }}
            >
              Estudiante de Informática & Software Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-10 max-w-lg"
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(237, 250, 228, 0.65)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              Desarrollando soluciones de software mientras construyo mi carrera
              profesional en tecnología.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #b0e88a, #54deb9)",
                  color: "#080e03",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                Ver proyectos <ChevronRight size={16} />
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 hover:bg-opacity-20"
                style={{
                  background: "rgba(176, 232, 138, 0.1)",
                  border: "1px solid rgba(176, 232, 138, 0.3)",
                  color: "#b0e88a",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                }}
              >
                Contactar
              </button>
              <a
                href="/cv.pdf"
                download="cv.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 hover:opacity-80"
                style={{
                  background: "rgba(84, 222, 185, 0.08)",
                  border: "1px solid rgba(84, 222, 185, 0.2)",
                  color: "#54deb9",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  display: "inline-flex",
                }}
              >
                <Download size={15} /> Descargar CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href="https://github.com/Jubiito1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(176, 232, 138, 0.07)",
                  border: "1px solid rgba(176, 232, 138, 0.15)",
                  color: "rgba(237, 250, 228, 0.6)",
                }}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/julián-bollinger-73a5143a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(176, 232, 138, 0.07)",
                  border: "1px solid rgba(176, 232, 138, 0.15)",
                  color: "rgba(237, 250, 228, 0.6)",
                }}
              >
                <Linkedin size={18} />
              </a>
              <div
                className="h-px flex-1"
                style={{ background: "rgba(176, 232, 138, 0.12)" }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "rgba(237, 250, 228, 0.3)",
                  fontSize: "0.72rem",
                }}
              >
                Buenos Aires, AR
              </span>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <TerminalCard />
          </div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 animate-bounce"
        style={{ color: "rgba(176, 232, 138, 0.4)" }}
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
