export const Equipos = () => {
  const equipo = [
    {
      nombre: "David Ramirez",
      rol: "Gerente de Producto",
      descripcion: "La bestia de la programación",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      nombre: "Marta Clermont",
      rol: "Líder de Diseño",
      descripcion:
        "Amet I love liquorice jujubes pudding croissant I love pudding.",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
    {
      nombre: "Alice Melbourne",
      rol: "Recursos Humanos",
      descripcion:
        "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
      img: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg",
    },
    {
      nombre: "John Doe",
      rol: "Buen compañero",
      descripcion:
        "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.",
      img: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-8 lg:py-20">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <p className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-200">
          Know Our Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Conoce a nuestro equipo de trabajo y el rol de cada integrante.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {equipo.map((miembro, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="sm:w-1/3">
              <img
                className="object-cover w-full h-48 sm:h-full"
                src={miembro.img}
                alt={miembro.nombre}
              />
            </div>
            <div className="flex flex-col justify-center p-5 sm:w-2/3">
              <p className="text-lg font-bold">{miembro.nombre}</p>
              <p className="mb-2 text-xs text-gray-500">{miembro.rol}</p>
              <p className="mb-4 text-sm text-gray-700">{miembro.descripcion}</p>
              <div className="flex space-x-3">
                <a
                  href="/"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {/* Twitter */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5"
                  >
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8..." />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                >
                  {/* Facebook */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5"
                  >
                    <path d="M22,0H2C0.895,0,0,0.895..." />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipos;
