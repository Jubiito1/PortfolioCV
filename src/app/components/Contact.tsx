import { motion } from "motion/react";
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "bollingerjulianguido@gmail.com",
    href: "mailto:bollingerjulianguido@gmail.com",
    color: "#b0e88a",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Julián Bollinger",
    href: "https://www.linkedin.com/in/juli%C3%A1n-bollinger-73a5143a5/",
    color: "#0a66c2",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Jubiito1",
    href: "https://github.com/Jubiito1",
    color: "#edfae4",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 9 11 2270-3778",
    href: "tel:+5491122703778",
    color: "#54deb9",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
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
              // contact
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
            Entremos en{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b0e88a, #54deb9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contacto
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="mb-10"
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(237, 250, 228, 0.65)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Estoy buscando mi primera oportunidad profesional en el área IT.
              Si tienes un proyecto interesante o una oportunidad laboral, me
              encantaría escucharte.
            </p>

            <div className="space-y-4">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200"
                    style={{
                      background: "#0d1a07",
                      border: "1px solid rgba(176, 232, 138, 0.1)",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${c.color}15`,
                        border: `1px solid ${c.color}25`,
                      }}
                    >
                      <Icon size={18} style={{ color: c.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "rgba(237, 250, 228, 0.4)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "2px",
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        className="truncate"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          color: "#edfae4",
                          fontSize: "0.9rem",
                          fontWeight: 400,
                        }}
                      >
                        {c.value}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      style={{ color: "#b0e88a" }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl"
            style={{
              background: "#0d1a07",
              border: "1px solid rgba(176, 232, 138, 0.12)",
            }}
          >
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                color: "#edfae4",
                fontSize: "1.1rem",
              }}
            >
              Enviar un mensaje
            </h3>
            <div className="space-y-4">
              {[
                {
                  label: "Nombre",
                  placeholder: "Tu nombre completo",
                  type: "text",
                },
                { label: "Email", placeholder: "tu@email.com", type: "email" },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "rgba(237, 250, 228, 0.6)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                    style={{
                      background: "rgba(176, 232, 138, 0.05)",
                      border: "1px solid rgba(176, 232, 138, 0.12)",
                      color: "#edfae4",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9rem",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(176, 232, 138, 0.4)";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(176, 232, 138, 0.06)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(176, 232, 138, 0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              ))}
              <div>
                <label
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "rgba(237, 250, 228, 0.6)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto u oportunidad..."
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(176, 232, 138, 0.05)",
                    border: "1px solid rgba(176, 232, 138, 0.12)",
                    color: "#edfae4",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(176, 232, 138, 0.4)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(176, 232, 138, 0.06)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(176, 232, 138, 0.12)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <button
                className="w-full py-3.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                style={{
                  background: "linear-gradient(135deg, #b0e88a, #54deb9)",
                  color: "#080e03",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                Enviar Mensaje
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
