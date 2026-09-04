import { companyData } from '../data';

export const Equipo = () => {
  const { equipo } = companyData;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 transition-colors duration-500 bg-gray-50 dark:bg-slate-900" id="equipo">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div className="flex justify-center mb-4">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider uppercase rounded-full transition-colors duration-500 bg-teal-200 dark:bg-cyan-900 text-teal-900 dark:text-cyan-200 shadow-[0_0_8px_rgba(0,229,255,0.4)]">
            KNOW OUR TEAM
          </span>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-2xl font-light leading-none tracking-tight sm:text-3xl md:mx-auto text-center transition-colors duration-500 text-gray-800 dark:text-gray-100">
          Conoce a nuestro equipo de trabajo y el rol de cada integrante.
        </h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        {equipo.map((member, index) => (
          <div key={index} className="flex flex-col xl:flex-row rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-700 hover:border-cyan-500/50">
            <div className="xl:w-2/5 h-48 xl:h-auto flex-shrink-0">
              <img 
                src={member.imagen} 
                alt={member.nombre} 
                className="w-full h-full object-cover object-center" 
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-center w-full">
              <h4 className="text-base md:text-xl font-bold transition-colors duration-500 text-gray-900 dark:text-white">{member.nombre}</h4>
              <p className="text-xs md:text-sm mb-2 md:mb-3 transition-colors duration-500 text-gray-400 dark:text-cyan-400">{member.cargo}</p>
              <p className="text-xs md:text-sm transition-colors duration-500 text-gray-700 dark:text-gray-300">{member.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipo;
