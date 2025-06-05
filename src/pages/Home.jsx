import fondo1 from "../assets/img/fondo1.png";

export default function Home() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${fondo1})` }}
    >
      <div className="absolute inset-0  bg-opacity-60 z-0"></div>

      <div className="text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Servicio Profesional de Aire Acondicionado
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Instalación, reparación y mantenimiento a domicilio
        </p>
        <a
          href="#contacto"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
        >
          Solicitar Servicio
        </a>
      </div>
    </section>
  );
}
