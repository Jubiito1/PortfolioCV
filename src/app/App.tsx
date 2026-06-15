import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Languages } from "./components/Languages";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#080e03",
        color: "#edfae4",
        fontFamily: "'Outfit', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <main>
        <Hero />

        <div
          className="w-full h-px mx-auto max-w-6xl"
          style={{ background: "rgba(176, 232, 138, 0.07)" }}
        />
        <About />

        <div
          className="w-full h-px mx-auto max-w-6xl"
          style={{ background: "rgba(176, 232, 138, 0.07)" }}
        />
        <Technologies />

        <div
          className="w-full h-px mx-auto max-w-6xl"
          style={{ background: "rgba(176, 232, 138, 0.07)" }}
        />
        <Projects />

        <div
          className="w-full h-px mx-auto max-w-6xl"
          style={{ background: "rgba(176, 232, 138, 0.07)" }}
        />
        <Education />

        <div
          className="w-full h-px mx-auto max-w-6xl"
          style={{ background: "rgba(176, 232, 138, 0.07)" }}
        />
        <Languages />

        <div
          className="w-full h-px mx-auto max-w-6xl"
          style={{ background: "rgba(176, 232, 138, 0.07)" }}
        />
        <Contact />
      </main>
      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(176, 232, 138, 0.15) transparent;
        }
        *::-webkit-scrollbar {
          width: 5px;
        }
        *::-webkit-scrollbar-track {
          background: transparent;
        }
        *::-webkit-scrollbar-thumb {
          background: rgba(176, 232, 138, 0.15);
          border-radius: 9999px;
        }
        ::selection {
          background: rgba(176, 232, 138, 0.25);
          color: #edfae4;
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(237, 250, 228, 0.25);
        }
      `}</style>
    </div>
  );
}
