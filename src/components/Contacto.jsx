import { useState } from 'react';
import { companyData } from '../data';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    motivo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const { nombre, motivo } = formData;
    
    if (!nombre.trim() || !motivo.trim()) {
      alert("Por favor completa tu nombre y el motivo de consulta.");
      return;
    }

    const numero = companyData.contacto.whatsapp;
    const mensaje = `Hola, mi nombre es ${nombre}.%0A%0A*Motivo de consulta:*%0A${motivo}`;
    
    // Abrir WhatsApp con el texto prellenado
    const url = `https://wa.me/54${numero}?text=${mensaje}`;
    window.open(url, '_blank');
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 transition-colors duration-500 bg-gray-50 dark:bg-slate-900" id="contacto">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        
        {/* Información de Contacto */}
        <div className="lg:w-1/2">
          <div className="mb-8">
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full transition-colors duration-500 bg-cyan-100 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-200">
              Contáctanos
            </span>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none transition-colors duration-500 text-gray-900 dark:text-gray-100">
              ¿Necesitas ayuda con tus
              <br className="hidden md:block" />
              <span className="inline-block text-cyan-500 mt-2">
                equipos e instalaciones?
              </span>
            </h2>
            <p className="text-base md:text-lg transition-colors duration-500 text-gray-700 dark:text-gray-300">
              Completa el formulario y te enviaremos tu consulta directamente por WhatsApp para una atención rápida y personalizada.
            </p>
          </div>
          
          <div className="flex items-center mt-6 text-gray-700 dark:text-gray-300">
            <svg className="w-6 h-6 mr-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{companyData.contacto.direccion}</span>
          </div>
        </div>

        {/* Formulario */}
        <div className="lg:w-1/2">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-slate-700 transition-colors duration-500">
            <form onSubmit={handleWhatsAppSend}>
              <div className="mb-4">
                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  className="w-full h-12 px-4 transition duration-200 border rounded shadow-sm bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="motivo" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Motivo de consulta</label>
                <textarea
                  id="motivo"
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  placeholder="Describe brevemente qué servicio necesitas o el problema que presenta tu equipo..."
                  className="w-full h-32 px-4 py-3 transition duration-200 border rounded shadow-sm bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition-all duration-300 rounded shadow-md bg-green-500 hover:bg-green-400 focus:outline-none"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.705.438 3.308 1.22 4.721L2.25 21.75l5.166-1.157A9.704 9.704 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75zm0 1.5c4.556 0 8.25 3.694 8.25 8.25S16.556 20.25 12 20.25a8.204 8.204 0 01-4.041-1.05l-.289-.172-3.036.68.694-2.956-.188-.299A8.203 8.203 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25zm-3.86 5.25c-.24-.002-.551.08-.82.35-.27.27-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.2 3.02.15.2 2.05 3.12 4.96 4.32 2.91 1.2 2.91.8 3.44.75.54-.05 1.74-.71 1.99-1.4.24-.69.24-1.28.16-1.4-.08-.12-.29-.2-.6-.35-.31-.15-1.84-.91-2.12-1.01-.28-.1-.49-.15-.7.15-.2.3-.8 1.01-1 1.21-.19.2-.39.23-.7.08-.31-.15-1.31-.48-2.5-1.54-.93-.82-1.55-1.83-1.74-2.13-.19-.3 0-.46.15-.61.13-.13.31-.35.46-.53.15-.17.21-.3.31-.49.1-.19.05-.37-.02-.52-.08-.15-.7-1.7-.96-2.33-.25-.6-.52-.52-.7-.53h-.6z" />
                </svg>
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contacto;
