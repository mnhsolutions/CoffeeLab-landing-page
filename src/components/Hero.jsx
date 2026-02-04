import { useRef } from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const sentinelRef = useRef(null);

  return (
    <div className="relative h-screen bg-[url('/images/hero-background.webp')] bg-cover bg-center text-white">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <Navbar sentinelRef={sentinelRef} />
        </div>
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl md:text-4xl font-semibold leading-tight mb-4
              max-sm:text-2xl max-sm:leading-snug">
              Tu café de especialidad
              <br />
              empieza acá.
            </h1>

            <p className="text-base md:text-md text-neutral-200 mb-8 leading-relaxed max-sm:text-sm">
              Granos seleccionados, tostados en pequeños lotes y preparados para
              resaltar el carácter único de cada origen.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-6 max-sm:gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3 font-heading font-medium tracking-wide rounded-full bg-white text-neutral-900 transition-all duration-300 hover:bg-stone-200">
                Explorar menú
              </a>

              <a
                href="#about"
                className="relative font-heading font-medium tracking-wide text-white sm:text-neutral-300 transition-colors duration-300 hover:text-white border border-white rounded-full px-4 py-3 sm:border-none sm:rounded-none sm:px-0 sm:py-0
                  after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-px after:w-[55%] after:bg-neutral-300 after:scale-x-0 after:origin-center
                  after:transition-transform after:duration-300 hover:after:scale-x-100 sm:after:block after:hidden"
              >
                Sobre nosotros
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sentinel: al final del Hero */}
      <div ref={sentinelRef} id="hero-end" />
    </div>
  );
}
