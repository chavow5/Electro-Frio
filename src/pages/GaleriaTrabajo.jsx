export const GaleriaTrabajo = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 transition-colors duration-500 bg-gray-50 dark:bg-slate-900">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-all duration-300 rounded shadow-sm border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-cyan-500/50">
          <img
            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 dark:text-cyan-400 hover:text-deep-purple-accent-700"
                aria-label="Categoría"
                title="proyecto"
              >
                Proyecto
              </a>
              <span className="text-gray-600 dark:text-gray-400">— 28 Dic 2020</span>
            </p>
            <a
              href="/"
              aria-label="Categoría"
              title="Instalación residencial"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-gray-900 dark:text-gray-100"
            >
              Instalación residencial
            </a>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Trabajos de instalación y reparación realizados con calidad y
              profesionalismo.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 dark:text-cyan-400 hover:text-deep-purple-800"
            >
              Ver más
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-all duration-300 rounded shadow-sm border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-yellow-400/50">
          <img
            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 dark:text-yellow-400 hover:text-deep-purple-accent-700"
                aria-label="Categoría"
                title="proyecto"
              >
                Proyecto
              </a>
              <span className="text-gray-600 dark:text-gray-400">— 28 Dic 2020</span>
            </p>
            <a
              href="/"
              aria-label="Categoría"
              title="Proyecto sencillo"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-gray-900 dark:text-gray-100"
            >
              Proyecto sencillo
            </a>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Trabajos realizados con enfoque en eficiencia y simplicidad.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 dark:text-yellow-400 hover:text-deep-purple-800"
            >
              Ver más
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-all duration-300 rounded shadow-sm border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-cyan-500/50 dark:hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <img
            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 dark:text-cyan-400 hover:text-deep-purple-accent-700"
                aria-label="Categoría"
                title="proyecto"
              >
                Proyecto
              </a>
              <span className="text-gray-600 dark:text-gray-400">— 28 Dic 2020</span>
            </p>
            <a
              href="/"
              aria-label="Categoría"
              title="Proyecto comercial"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-gray-900 dark:text-gray-100"
            >
              Proyecto comercial
            </a>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Instalaciones y servicios ejecutados para clientes comerciales.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 dark:text-cyan-400 hover:text-deep-purple-800"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GaleriaTrabajo;
