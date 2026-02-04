import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-semibold text-gray-700">
          Tu carrito está vacío 🛒
        </p>
        <p className="text-gray-500">
          Agregá productos desde el menú
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-[1200px] mx-auto py-28 px-4">
      <h1 className="text-3xl font-bold mb-10">Carrito de compras</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* LISTA DE PRODUCTOS */}
        <ul className="flex flex-col gap-6">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border"
            >
              {/* Imagen */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              {/* Info */}
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  Precio unitario: ${item.price}
                </p>

                {/* Cantidad */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 border rounded flex items-center justify-center text-lg"
                  >
                    −
                  </button>

                  <span className="min-w-[24px] text-center font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 border rounded flex items-center justify-center text-lg"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500 mt-2 w-fit"
                >
                  Eliminar
                </button>
              </div>

              {/* Subtotal */}
              <div className="flex flex-col justify-between items-end">
                <span className="text-lg font-semibold">
                  ${item.price * item.quantity}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* RESUMEN */}
        <aside className="h-fit sticky top-28 bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">
            Resumen
          </h2>

          <div className="flex justify-between mb-4 text-gray-700">
            <span>Total</span>
            <span className="font-bold">
              ${totalPrice}
            </span>
          </div>

          <button className="w-full bg-amber-500 hover:bg-amber-600 transition text-black font-bold py-4 rounded-xl">
            Finalizar compra
          </button>
        </aside>
      </div>
    </section>
  );
}

