export const AboutUs = () => {
  return (
    <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full transition-colors duration-500 bg-white dark:bg-slate-900">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src="https://images.pexels.com/photos/3888149/pexels-photo-3888149.jpeg?auto=compress&cs=tinysrgb&w=800"
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full rounded-r-3xl opacity-80"
          alt="Técnico trabajando"
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full transition-colors duration-500 bg-teal-accent-400 dark:bg-cyan-900 text-teal-900 dark:text-cyan-200">
                Compromiso
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none transition-colors duration-500 text-gray-900 dark:text-gray-100">
              Expertos en climatización
              <br className="hidden md:block" />
              <span className="inline-block transition-colors duration-500 text-deep-purple-accent-400 dark:text-cyan-400 mt-2">
                y electricidad
              </span>
            </h2>
            <p className="text-base md:text-lg transition-colors duration-500 text-gray-700 dark:text-gray-300">
              Brindamos servicio técnico, mantenimiento e instalaciones con personal altamente capacitado. Garantizamos eficiencia y seguridad en cada trabajo para tu hogar o empresa.
            </p>
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
              <input
                placeholder="Tu Nombre"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 border rounded shadow-sm appearance-none md:mr-2 focus:outline-none bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white focus:border-cyan-400 dark:focus:border-cyan-400"
              />
              <input
                placeholder="Tu Teléfono"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 border rounded shadow-sm appearance-none md:mb-0 focus:outline-none bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white focus:border-cyan-400 dark:focus:border-cyan-400"
              />
            </div>
            <div className="flex items-center mt-4">
              <button
                type="button"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-900 dark:text-black transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-300 focus:outline-none"
              >
                Solicitar Llamada
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;