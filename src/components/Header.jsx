import { useState } from "react";
import logo from "../assets/img/logo-Electrofrio.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="px-4 py-4 mx-auto max-w-screen-xl flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo Electrofrio" className="h-15" />
        </a>

        {/* Navegación para pantallas grandes */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/" className="hover:text-teal-400">Home</a>
          <a href="/FormularioTrabajoTecnico" className="hover:text-teal-400">Formulario</a>
          <a
            href="/signup"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition"
          >
            Iniciar sesión
          </a>
        </nav>

        {/* Menú hamburguesa para móviles */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4 bg-gray-800">
          <a href="/" className="block hover:text-teal-400">Home</a>
          <a href="/FormularioTrabajoTecnico" className="block hover:text-teal-400">Formulario</a>
          {/* si quiero agregar boton de registro
           <a
            href="/signup"
            className="block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-center transition"
          >
            Sign up
          </a> */}
        </div>
      )}
    </header>
  );
};

export default Header;
