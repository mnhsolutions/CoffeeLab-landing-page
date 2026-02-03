export default function Layout({ children }) {
  return (
    <>
      <main className="grid grid-cols-1">{children}</main>

      {/* Carrito overlay */}
      <div
        id="cart-overlay"
        className="fixed inset-0 z-50 hidden bg-black/40"
      >
        <div
          id="cart-sidebar"
          className="absolute right-0 top-0 h-full w-full md:w-1/3 bg-white shadow-lg p-6 flex flex-col transform translate-x-full transition-transform duration-300"
        >
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Carrito</h2>
            <button id="close-cart" className="text-2xl cursor-pointer">
            </button>
          </header>
          <ul id="cart-items" className="flex-1 overflow-y-auto space-y-4"></ul>
          <footer className="mt-4">
            <p id="cart-total-wrapper" className="font-bold text-lg hidden">
              Total: $<span id="cart-total"></span>
            </p>
            <button
              id="go-checkout"
              className="w-full mt-2 bg-amber-500 text-white py-4 rounded-xl"
            >
              Pagar
            </button>
          </footer>
        </div>
      </div>

      {/* Toast */}
      <div
        id="toast"
        className="fixed top-0 left-1/2 -translate-x-1/2 z-[999] mt-2 px-6 py-3 rounded-lg shadow-lg text-white text-sm font-medium opacity-0 -translate-y-6 transition-all duration-300 pointer-events-none"
      ></div>

      {/* Inicializa carrito */}
    </>
  );
}
