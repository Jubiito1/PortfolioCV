import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Tecnologías", href: "#technologies" },
  { label: "Proyectos", href: "#projects" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8, 14, 3, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(176, 232, 138, 0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(176, 232, 138, 0.15)", border: "1px solid rgba(176, 232, 138, 0.3)" }}
          >
            <Terminal size={16} style={{ color: "#b0e88a" }} />
          </div>
          <span
            className="hidden sm:block"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#b0e88a",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
            }}
          >
            jbollinger<span style={{ color: "#54deb9" }}>.dev</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="transition-colors duration-200 hover:text-primary"
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(237, 250, 228, 0.7)",
                fontSize: "0.9rem",
                fontWeight: 400,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{
              background: "rgba(176, 232, 138, 0.12)",
              border: "1px solid rgba(176, 232, 138, 0.35)",
              color: "#b0e88a",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            Contratar
          </button>
        </div>

        <button
          className="md:hidden p-2"
          style={{ color: "#b0e88a" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(8, 14, 3, 0.97)",
              borderBottom: "1px solid rgba(176, 232, 138, 0.12)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-2 transition-colors hover:text-primary"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "rgba(237, 250, 228, 0.8)",
                    fontSize: "1rem",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
