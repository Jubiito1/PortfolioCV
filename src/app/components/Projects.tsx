import { motion } from "motion/react";
import { Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "Inventory Management System",
    year: "2026",
    description:
      "Sistema de gestión de inventario desarrollado en C# .NET 10. Aplicando Programación Orientada a Objetos y lógica de administración de productos.",
    techs: ["C#", ".NET 10", "OOP", "SQL"],
    color: "#9b4f96",
    image:
      "https://images.unsplash.com/photo-1516031190212-da133013de50?w=600&h=340&fit=crop&auto=format",
    imageAlt: "Inventory management software dashboard",
    github: "https://github.com/Jubiito1/InventoryManagementSystem",
    demo: "#",
  },
  {
    title: "Netflix Clone",
    year: "2026",
    description:
      "Interfaz web desarrollada con HTML y CSS replicando la estructura y diseño de una plataforma de streaming.",
    techs: ["HTML", "CSS", "Responsive Design"],
    color: "#e50914",
    image: "/images/projects/netflix.png",
    imageAlt: "Web development coding on dark screen",
    github: "https://github.com/Jubiito1/Netflix-LandingPage-Clone--HTML-CSS-",
    demo: "#",
  },
  {
    title: "Souls2D",
    year: "2025",
    description:
      "Videojuego 2D desarrollado en Java aplicando Programación Orientada a Objetos, lógica de juego y estructuras de control.",
    techs: ["Java", "OOP", "Game Logic", "2D Engine"],
    color: "#f89820",
    image: "/images/projects/souls2d.png",
    imageAlt: "Dark atmospheric game art",
    github: "https://github.com/Jubiito1/Souls2D/tree/player-enemy-Curly-jp",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
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
              // projects
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(84,222,185,0.2)" }}
            />
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
            Proyectos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b0e88a, #54deb9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Destacados
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "#0d1a07",
                border: "1px solid rgba(176, 232, 138, 0.1)",
                transition: "all 0.25s ease",
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ height: "200px" }}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ background: "#0d1a07" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, rgba(13, 26, 7, 0.95) 100%)`,
                  }}
                />
                <div
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(8, 14, 3, 0.8)",
                    border: "1px solid rgba(176, 232, 138, 0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Calendar size={11} style={{ color: "#7aad5c" }} />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#7aad5c",
                      fontSize: "0.68rem",
                    }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    color: "#edfae4",
                    fontSize: "1.1rem",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-5 flex-1"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "rgba(237, 250, 228, 0.55)",
                    fontSize: "0.87rem",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md"
                      style={{
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        color: project.color,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.68rem",
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg flex-1 justify-center transition-all duration-200 hover:opacity-80"
                    style={{
                      background: "rgba(176, 232, 138, 0.07)",
                      border: "1px solid rgba(176, 232, 138, 0.15)",
                      color: "#b0e88a",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
