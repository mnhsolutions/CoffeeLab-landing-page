import coffeesData from '../data/coffees.json';
import CoffeeCard from './Coffees/CoffeeCard';

export default function Coffees() {
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <header className="flex items-center justify-center">
          <h1 className="relative text-2xl font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:h-[3px] after:w-44 after:bg-amber-500">
            Descubre nuestros cafés
          </h1>
        </header>

        <ul className="flex overflow-x-auto gap-2 snap-x snap-mandatory px-3 pb-4
          sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:gap-8
          lg:grid-cols-4 lg:gap-6 justify-items-center">
          {coffeesData.coffees.map((coffee) => (
            <li key={coffee.titleCard} className="snap-center shrink-0 w-auto sm:w-auto">
              <CoffeeCard {...coffee} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
