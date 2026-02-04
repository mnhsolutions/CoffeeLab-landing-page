export default function CheckoutSummary({
  total,
  transactionId,
  paymentMethod,
  purchaseDate,
  merchant,
  isProcessing,
  handleConfirmPurchase,
}) {
  return (
    <aside className="h-fit py-10 bg-white rounded-xl shadow p-6 grid grid-rows-[auto_1fr_auto] gap-2">
      <h2 className="font-bold mb-3">Detalle de compra</h2>

      <div className="flex flex-col gap-3 text-sm">
        <p>
          <span className="font-bold">Total:</span> ${total.toFixed(2)}
        </p>
        <p>
          <span className="font-bold">ID Transacción:</span> {transactionId}
        </p>
        <p>
          <span className="font-bold">Método de pago:</span> {paymentMethod}
        </p>
        <p>
          <span className="font-bold">Fecha:</span> {purchaseDate}
        </p>
        <p>
          <span className="font-bold">Comerciante:</span> {merchant}
        </p>
      </div>

      <button
        onClick={handleConfirmPurchase}
        disabled={isProcessing}
        className={`w-full rounded-xl py-3 font-semibold text-white cursor-pointer hover:bg-amber-700 ${
          isProcessing
            ? "bg-amber-400 cursor-not-allowed"
            : "bg-amber-500 hover:bg-amber-700"
        }`}
      >
        {isProcessing ? "Procesando..." : "Confirmar compra"}
      </button>
    </aside>
  );
}
