import { useState } from "react";
import logo from "../assets/img/logo-Electrofrio.png";
import { useTheme } from "../context/ThemeContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <header className={`relative transition-colors duration-500 ${isDarkMode ? 'bg-slate-900 text-white border-b border-slate-800' : 'bg-white text-gray-900 shadow-md'}`}>
      {/* Accent colors border bottom */}
      <div className="h-1 w-full flex">
        <div className="w-1/2 h-full bg-yellow-400"></div>
        <div className="w-1/2 h-full bg-cyan-400"></div>
      </div>
      
      <div className="px-4 py-4 mx-auto max-w-screen-xl flex justify-between items-center relative z-10">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo Electrofrio" className="h-15" />
        </a>

        {/* Navegación para pantallas grandes */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/" className={`transition-colors ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-teal-600'}`}>Inicio</a>
          <a href="#servicios" className={`transition-colors ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-teal-600'}`}>Servicios</a>
          <a href="#equipo" className={`transition-colors ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-teal-600'}`}>Equipo</a>
          <a href="#contacto" className={`transition-colors ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-teal-600'}`}>Contacto</a>
        </nav>

        {/* Menú hamburguesa para móviles */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div className={`lg:hidden px-4 pb-4 space-y-4 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
          <a href="/" className={`block transition-colors ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-teal-600'}`}>Inicio</a>
          <a href="#servicios" className={`block transition-colors ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-teal-600'}`}>Servicios</a>
          <a href="#equipo" className={`block transition-colors ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-teal-600'}`}>Equipo</a>
          <a href="#contacto" className={`block transition-colors ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-teal-600'}`}>Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Header;
