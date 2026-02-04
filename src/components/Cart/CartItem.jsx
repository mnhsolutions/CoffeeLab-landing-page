export default function CartItem({
  item,
  increaseQty,
  decreaseQty,
  //removeFromCart,
}) {
  return (
    <li
      key={item.id}
      className="rounded-xl p-4 grid grid-cols-[80px_1fr_80px] gap-4 items-center"
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", }}>

      {/* Imagen */}
      <img
        src={item.image}
        alt={item.title}
        className="h-16 w-16 object-contain"
      />

      {/* Contenido central */}
      <div className="flex flex-col gap-2">
        <p className="text-base font-bold text-black">{item.title}</p>

        <p className="text-sm text-gray-600">
          ${item.price} x {item.quantity}
        </p>

        <div className="flex items-center gap-2 mt-1">
          {/* Boton decrementar */}
          <button
            onClick={() => decreaseQty(item.id)}
            className="w-6 h-6 bg-amber-500 text-white rounded flex items-center justify-center text-sm cursor-pointer hover:bg-amber-700">
            −
          </button>

          <span className="w-6 text-center">{item.quantity}</span>

          {/* Boton incrementar */}
          <button
            onClick={() => increaseQty(item.id)}
            className="w-6 h-6 bg-amber-500 text-white rounded flex items-center justify-center text-sm cursor-pointer hover:bg-amber-700">
            +
          </button>
        </div>

        {/* Boton eliminar 
        <button
          onClick={() => removeFromCart(item.id)}
          className="w-22 text-white text-md bg-red-500 rounded-md self-start cursor-pointer hover:bg-red-800"
          style={{ padding: "4px 8px" }}
        >
          Eliminar
        </button>*/}
      </div>

      {/* Precio y calculo del total de cada producto */}
      <p className="font-bold text-right">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </li>
  );
}
