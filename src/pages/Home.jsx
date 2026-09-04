import fondo1 from "../assets/img/fondo1.png";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center transition-colors duration-500`}
      style={{ backgroundImage: `url(${fondo1})` }}
    >
      {/* Overlay to darken background based on theme */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${isDarkMode ? 'bg-black opacity-80' : 'bg-black opacity-50'}`}></div>

      <div className="text-center z-10 px-4 relative">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-500 ${isDarkMode ? 'text-white' : 'text-white'}`}
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.9)" }}
        >
          <span className={isDarkMode ? 'text-yellow-400' : 'text-yellow-400'}>Electro</span>
          <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-400'}>Frio</span>
          <br />
          Servicios integrales
        </h1>
        <p
          className="text-lg md:text-xl mb-8 text-gray-200"
          style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.9)" }}
        >
          Calidad, confianza y profesionalismo garantizado
        </p>
        <a
          href="#contacto"
          className={`inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,229,255,0.6)]' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'}`}
        >
          Solicitar Servicio
        </a>
      </div>
    </section>
  );
}
