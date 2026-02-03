import { useState } from "react";
import FilterMenu from "./Menu/FilterMenu";
import MenuCard from "./Menu/MenuCard";
import menuData from "../data/menu.json";

// icons
import IconAll from "../icons/IconAll";
import IconBaking from "../icons/IconBaking";
import IconCoffee from "../icons/IconCoffee";
import IconSnacks from "../icons/IconSnacks";
import IconSmoothies from "../icons/IconSmoothies";

export default function Menu() {
  const [filter, setFilter] = useState("all");

  // Función para obtener productos filtrados
  const getProducts = () => {
    if (filter === "all") return menuData.all || [];
    return (menuData[filter] || []).map((id) =>
      menuData.all.find((p) => p.id === id)
    );
  };

  const products = getProducts();

  // Filters con keys los cuales coinciden con el objeto JSON
  const filters = [
    { title: "Todos", key: "all", icon: IconAll },
    { title: "Café", key: "coffes", icon: IconCoffee },
    { title: "Licuados", key: "smoothies", icon: IconSmoothies },
    { title: "Panificación", key: "baking", icon: IconBaking },
    { title: "Snacks fit", key: "snacks", icon: IconSnacks },
  ];

  return (
    <section id="menu">
      <div className="max-w-[1200px] mx-auto py-10 flex flex-col gap-10">
        {/* Header */}
        <header className="flex flex-col items-center justify-center gap-6">
          <h1 className="relative text-2xl font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:h-[3px] after:w-28 after:bg-amber-500">
            Menú
          </h1>

          {/* Nav Filters */}
          <nav className="w-full flex gap-4 justify-center md:justify-end">
            {filters.map((f) => {
              const Icon = f.icon;
              return (
                <FilterMenu
                  key={f.key}
                  title={f.title}
                  icon={Icon}
                  active={filter === f.key}
                  onClick={() => setFilter(f.key)}
                />
              );
            })}
          </nav>
        </header>

        {/* Product List */}
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
