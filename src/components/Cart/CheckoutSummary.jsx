import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutSummary({
  total,
  transactionId,
  paymentMethod,
  purchaseDate,
  merchant,
  isProcessing,
  progress,
  statusText,
  isSuccess, // 👈 NUEVO
  handleConfirmPurchase,
}) {
  const navigate = useNavigate();

  // ✅ Redirect controlado (no desde el hook)
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate("/success");
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate]);

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

      {/* Botón animado tipo Mercado Libre */}
      <motion.button
        onClick={handleConfirmPurchase}
        disabled={isProcessing || isSuccess}
        whileTap={!isProcessing && !isSuccess ? { scale: 0.97 } : {}}
        className={`relative overflow-hidden w-full rounded-xl py-3 font-semibold cursor-pointer text-white
          ${
            isSuccess
              ? "bg-green-600"
              : isProcessing
              ? "bg-amber-400 cursor-not-allowed"
              : "bg-amber-500 hover:bg-amber-700"
          }`}
      >
        {/* Barra de progreso */}
        <AnimatePresence>
          {isProcessing && !isSuccess && (
            <motion.div
              className="absolute inset-y-0 left-0 bg-amber-600"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Contenido */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isProcessing && !isSuccess && (
            <motion.span
              className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          )}

          {isSuccess
            ? "✔ Pago confirmado"
            : isProcessing
            ? statusText
            : "Confirmar compra"}
        </span>
      </motion.button>
    </aside>
  );
}
