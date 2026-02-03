export default function FilterMenu({ title, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`filter-btn border-2 px-6 py-2 rounded-md transition cursor-pointer
        ${active ? "border-amber-600 bg-rose-100" : "border-color-coffee-main"}`}
    >
      {title}
    </button>
  );
}
