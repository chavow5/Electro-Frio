import { companyData } from '../data';

// Custom icons based on the service name
const getServiceIcon = (index) => {
  const commonClasses = "w-8 h-8 transition-colors duration-500 text-teal-500 dark:text-cyan-400";
  
  switch(index) {
    case 0: // Servicio técnico integral (Wrench & Settings)
      return (
        <svg className={commonClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 1: // Instalaciones y mantenimiento (Power plug/Cord)
      return (
        <svg className={commonClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 2: // Soporte técnico especializado (Headset / Support)
      return (
        <svg className={commonClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.168a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 3: // Mantenimiento comercial (Storefront / Building)
      return (
        <svg className={commonClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 4: // Servicio técnico en refrigeración (Snowflake)
      return (
        <svg className={commonClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m-9-9h18m-14.121-6.364l10.242 10.242M4.879 17.636l10.242-10.242M8.293 8.293L5 5m3.293 10.707L5 19m10.707-3.293L19 19m-3.293-10.707L19 5" />
        </svg>
      );
    case 5: // Reparación, instalación y service (Wrench)
      return (
        <svg className={commonClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      );
    default:
      return (
        <svg className={commonClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
  }
};

export const Servicios = () => {
  return (
    <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 transition-colors duration-500 bg-white dark:bg-slate-900" id="servicios">
      <div className="max-w-xl mb-12 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="flex justify-center mb-4">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider uppercase rounded-full transition-colors duration-500 bg-teal-100 dark:bg-cyan-900/50 text-teal-900 dark:text-cyan-300">
            Especialidades
          </span>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:mx-auto transition-colors duration-500 text-gray-900 dark:text-gray-100">
          Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-500">Servicios</span>
        </h2>
        <p className="text-base md:text-lg transition-colors duration-500 text-gray-700 dark:text-slate-400">
          Ofrecemos soluciones integrales y profesionales en electricidad y refrigeración. Tu confort y seguridad en manos de expertos.
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {companyData.servicios.map((servicio, index) => (
          <div
            key={index}
            className="group relative flex flex-col p-8 bg-white dark:bg-slate-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm overflow-hidden"
          >
            {/* Glowing accent border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl transition-colors duration-500 bg-teal-50 dark:bg-slate-700/50 group-hover:bg-teal-100 dark:group-hover:bg-slate-700">
              {getServiceIcon(index)}
            </div>
            
            <h6 className="mb-3 text-xl font-bold leading-tight transition-colors duration-500 text-gray-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-cyan-400">
              {servicio}
            </h6>
            
            <p className="text-sm transition-colors duration-500 text-gray-600 dark:text-slate-400 mt-auto">
              Garantizamos profesionalismo y calidad en cada trabajo realizado para este servicio específico.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
