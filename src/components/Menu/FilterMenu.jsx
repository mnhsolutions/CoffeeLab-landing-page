export default function FilterMenu({ title, icon: Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        transition cursor-pointer flex items-center justify-center
        border-2
        ${active ? "border-amber-600 bg-rose-100" : "border-color-coffee-main"}

        /* MOBILE */
        w-12 h-12 rounded-full

        /* DESKTOP */
        md:w-auto md:h-auto md:rounded-md md:px-6 md:py-2
      `}>
        
      {/* Icono en mobile */}
      <span className="block md:hidden">
        {Icon && <Icon className="w-6 h-6" />}
      </span>

      {/*Texto en desktop */}
      <span className="hidden md:block">
        {title}
      </span>
    </button>
  );
}
