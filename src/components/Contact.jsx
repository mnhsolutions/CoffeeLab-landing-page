import contactData from "../data/contact.json";

export default function Contact() {
  const icons = contactData.icons;
  const info = contactData.info;

  return (
    <section id="contact" className="h-full max-md:h-auto">
      <div className="max-w-[1200px] mx-auto py-10 h-full max-md:h-auto px-4 max-md:px-6">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-rows-[auto_1fr] h-full gap-10 max-md:grid-rows-none max-md:gap-8">
          {/* HEADER */}
          <header className="flex flex-col gap-6 justify-center items-center text-center">
            <h1 className="relative text-2xl font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:h-[3px] after:w-44 after:bg-amber-500">
              Contacto
            </h1>

            <p className="text-xl font-heading text-gray-700 max-md:text-base">
              Tu próximo café empieza con un mensaje <br className="max-md:hidden" />
              Contáctanos o acércate a nuestro café y viví la experiencia.
            </p>
          </header>

          {/* CONTENIDO */}
          <div className="grid grid-cols-2 gap-4 h-full max-md:grid-cols-1 max-md:gap-6 max-md:h-auto">
            {/* FORMULARIO */}
            <form
              className="h-full rounded-xl flex flex-col justify-center items-center gap-5 max-md:py-8"
              style={{
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
              }}
            >
              <h1 className="text-2xl font-semibold max-md:text-xl">Envianos un mensaje</h1>

              <input
                className="h-12 w-[90%] rounded-lg bg-gray-100 text-gray-800 px-2"
                type="text"
                placeholder="Nombre completo"
                autoComplete="off"
              />

              <input
                className="h-12 w-[90%] rounded-lg bg-gray-100 text-gray-800 px-2"
                type="text"
                placeholder="Correo electrónico"
                autoComplete="off"
              />

              <textarea
                className="h-44 w-[90%] rounded-lg bg-gray-100 text-gray-800 px-2 py-2 resize-none leading-normal max-md:h-36"
                placeholder="Mensaje"
                autoComplete="off"
              ></textarea>

              <button
                className="w-[90%] py-3 px-6 font-bold bg-amber-500 rounded-xl text-white"
                type="submit"
              >
                Enviar mensaje
              </button>
            </form>

            {/* MAPA + INFO */}
            <div
              className="h-full rounded-xl overflow-hidden grid grid-rows-[65%_35%] max-md:grid-rows-none max-md:h-auto"
              style={{
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
              }}
            >
              {/* MAPA */}
              <div className="w-full h-full max-md:h-64">
                <img src="/contact/map.png" alt="map contact" className="w-full h-full object-cover" />
              </div>

              {/* INFO */}
              <div className="flex flex-col gap-8 justify-center px-8 bg-white max-md:gap-4 max-md:py-6">
                {info.map((item) => (
                  <span key={item.text} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                    <img src={icons[item.icon]} alt={item.alt} className="w-5 h-5" />
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
