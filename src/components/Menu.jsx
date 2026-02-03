import { useState } from "react";
import { FilterMenu } from "./Menu/FilterMenu";
import MenuCard from "./Menu/MenuCard";
import menuData from "../data/menu.json"; 

export default function Menu() {
  const [filter, setFilter] = useState("all");

  // Función para obtener productos filtrados
  const getProducts = () => {
    if (filter === "all") return menuData.all;
    return menuData[filter].map((id) => menuData.all.find((p) => p.id === id));
  };

  const products = getProducts();

  const filters = [
    { title: "Todos", key: "all" },
    { title: "Café", key: "coffes" },
    { title: "Licuados", key: "smoothies" },
    { title: "Panificación", key: "baking" },
    { title: "Snacks fit", key: "snacks" },
  ];

  return (
    <section id="menu">
      <div className="max-w-[1200px] mx-auto py-10 flex flex-col gap-10">
        <header className="flex flex-col items-center justify-center gap-6">
          <h1 className="relative text-2xl font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:h-[3px] after:w-28 after:bg-amber-500">
            Menú
          </h1>

          <nav className="w-full flex gap-4 justify-center md:justify-end">
            {filters.map((f) => (
              <FilterMenu
                key={f.key}
                title={f.title}
                active={filter === f.key}
                onClick={() => setFilter(f.key)}
              />
            ))}
          </nav>
        </header>

        <ul className="flex overflow-x-auto gap-6 px-4 pb-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-8 justify-items-center">
          {products.map((product) => (
            <li key={product.id} className="snap-center shrink-0 w-72 sm:w-auto">
              <MenuCard {...product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
