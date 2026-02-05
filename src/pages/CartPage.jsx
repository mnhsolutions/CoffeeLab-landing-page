import { useCart } from "../context/CartContext";
import { useCheckout } from "../hooks/useCheckout";
import CartItem from "../components/Cart/CartItem";
import CheckoutSummary from "../components/Cart/CheckoutSummary";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const {
  total,
  isProcessing,
  isSuccess,
  progress,
  statusText,
  transactionId,
  paymentMethod,
  purchaseDate,
  merchant,
  handleConfirmPurchase,
} = useCheckout(cart);



  const isCartEmpty = cart.length === 0;

  return (
    <div className="min-h-screen grid grid-rows-[200px_4fr] bg-gray-50">
      {/* Header */}
      <header className="flex flex-col items-start justify-center px-4 md:px-10 gap-4">
        <button
          onClick={() => (window.location.href = "/")}
          className="w-32 bg-gray-800 text-white py-3 rounded-xl cursor-pointer hover:opacity-90"
        >
          Volver a inicio
        </button>
        <h1 className="font-bold text-black text-3xl">
          Resumen de compra
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 px-4 md:px-10 pb-10">
        {/* Lista de productos */}
        <section className="bg-white rounded-xl shadow p-4 grid grid-rows-[60px_1fr] min-h-0">
          <h2 className="font-bold mb-3">Productos</h2>

          {isCartEmpty ? (
            <p className="text-gray-500">No hay productos en el carrito</p>
          ) : (
            <ul className="flex flex-col overflow-y-auto min-h-0 gap-4 pr-2">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeFromCart={removeFromCart}
                />
              ))}
            </ul>
          )}
        </section>

        {/* Resumen de compra */}
        {!isCartEmpty && (
          <CheckoutSummary
            total={total}
            transactionId={transactionId}
            paymentMethod={paymentMethod}
            purchaseDate={purchaseDate}
            merchant={merchant}
            isProcessing={isProcessing}
            isSuccess={isSuccess}
            progress={progress}
            statusText={statusText}
            handleConfirmPurchase={handleConfirmPurchase}
          />
        )}
      </div>
    </div>
  );
}
