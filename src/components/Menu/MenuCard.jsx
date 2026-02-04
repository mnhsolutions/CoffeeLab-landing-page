import AddCartButton from "./AddCartButton";

export default function MenuCard({
  id,
  image,
  title,
  price,
  category,
  description
}) {

  const product = {
    id,
    title,
    price,
    image,
    category
  };

  return (
    <div
      className="menu-card grid grid-rows-[20%_50%_30%] h-72 w-full rounded-xl py-4 px-8"
      data-category={category}
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
      }}
    >
      <header className="flex justify-between items-center">
        <div className="product-rating flex gap-2">
          <h1 className="text-sm font-bold">4.8</h1>
          <span className="text-[#F4C430]">★</span>
        </div>

        <AddCartButton product={product} />
      </header>

      <div className="content flex justify-center items-center overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>

      <footer className="grid grid-cols-[3fr_1fr] gap-2 py-2">
        <div className="product-info flex flex-col gap-2">
          <h3 className="text-[1.10rem] font-semibold leading-tight line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-700 opacity-70 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="product-price flex justify-end">
          <span className="text-right text-lg font-bold">${price}</span>
        </div>
      </footer>
    </div>
  );
}
