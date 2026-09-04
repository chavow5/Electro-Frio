import { companyData } from '../data';

const facebookIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
  </svg>
);

const facebookLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const instagramIcon = (
  <svg viewBox="0 0 30 30" fill="currentColor" className="h-7 w-7">
    <circle cx="15" cy="15" r="4" />
    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
  </svg>
);

export const Footer = () => {
  const { contacto } = companyData;

  return (
    <footer className="bg-slate-900 text-slate-100 pt-16 pb-8 border-t border-slate-800">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-1">
            <a href="/" aria-label="Ir al inicio" title="Electrofrio" className="inline-flex items-center">
              <svg className="w-8 text-teal-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide uppercase text-white">
                ElectroFrio
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-300">
                Empresa dedicada a servicios de electricidad y refrigeración. Brindamos soluciones confiables y de calidad.
              </p>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Contacto
            </p>
            <div className="flex mt-4">
              <p className="mr-2 text-gray-300">WhatsApp:</p>
              <a href={contacto.whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-teal-400 hover:text-teal-200">
                {contacto.whatsapp}
              </a>
            </div>
            <div className="flex mt-2">
              <p className="mr-2 text-gray-300">Dirección:</p>
              <span className="text-gray-300">
                {contacto.direccion}
              </span>
            </div>
          </div>
          
          <div>
            <span className="text-base font-bold tracking-wide text-white">
              Redes Sociales
            </span>
            <div className="flex items-center mt-4 space-x-4">
              <a href={contacto.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors duration-300 hover:text-teal-400" aria-label="Facebook">
                {facebookLogo}
              </a>
              <a href={contacto.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors duration-300 hover:text-teal-400" aria-label="Instagram">
                {instagramIcon}
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Síguenos en nuestras redes sociales para conocer más de nuestros trabajos.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col-reverse justify-between pt-5 pb-5 border-t border-gray-700 lg:flex-row mt-10">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ElectroFrio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
