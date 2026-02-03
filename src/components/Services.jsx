import servicesData from "../data/services.json";
import ServiceCard from "./Services_section/ServiceCard"

export default function Services() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto py-10">
        <section className="flex flex-col gap-10 mx-0">
          <header className="flex items-center justify-center">
            <h1 className="relative text-2xl font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:h-[3px] after:w-44 after:bg-amber-500">
              Nuestros servicios
            </h1>
          </header>

          <ul className="flex overflow-x-auto gap-6 snap-x snap-mandatory px-4 pb-4
              sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:gap-8 justify-items-center
              lg:grid-cols-4">
            {servicesData.services.map((service) => (
              <li key={service.title} className="snap-center shrink-0 w-72 sm:w-auto">
                <ServiceCard {...service} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
