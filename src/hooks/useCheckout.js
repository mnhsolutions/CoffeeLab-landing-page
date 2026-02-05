import { useState, useMemo } from "react";

const paymentMethods = [
  "Tarjeta de crédito",
  "Tarjeta de débito",
  "Mercado Pago",
  "Transferencia bancaria",
];

function generateTransactionId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 12; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id.match(/.{1,4}/g).join("-");
}

function formatDate(date) {
  return date.toLocaleDateString("es-AR", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function useCheckout(cart) {
  const merchant = "Café Moderno — Tienda Oficial";

  //  Inicializar transacción una sola vez
  const [transaction] = useState(() => {
    const storedTransaction = JSON.parse(
      localStorage.getItem("current_transaction")
    );
    if (storedTransaction) return storedTransaction;

    const newTransaction = {
      id: generateTransactionId(),
      method:
        paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
      date: formatDate(new Date()),
    };

    localStorage.setItem(
      "current_transaction",
      JSON.stringify(newTransaction)
    );
    return newTransaction;
  });

  //  Estado de proceso de pago
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Confirmar compra");

  //  Total calculado automáticamente a partir del carrito
  const total = useMemo(() => {
    const storedCart = cart || JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  //  Confirmar compra
  function handleConfirmPurchase() {
    if (isProcessing) return;

    setIsProcessing(true);
    setProgress(0);
    setStatusText("Procesando pago...");

    let current = 0;

    const interval = setInterval(() => {
      const increment = Math.random() * 12 + 5;
      current += increment;

      if (current >= 80) {
        setStatusText("Confirmando compra...");
      }

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        const summary = {
          total: total.toFixed(2),
          transactionId: transaction.id,
          paymentMethod: transaction.method,
          purchaseDate: transaction.date,
          merchant,
        };

        localStorage.setItem(
          "purchase_summary",
          JSON.stringify(summary)
        );
        localStorage.removeItem("current_transaction");

        //  Estado de éxito (animación estilo Mercado Libre)
        setStatusText("Pago confirmado");
        setIsSuccess(true);

        if (current >= 100) {
          current = 100;
          clearInterval(interval);

          const summary = {
            total: total.toFixed(2),
            transactionId: transaction.id,
            paymentMethod: transaction.method,
            purchaseDate: transaction.date,
            merchant,
          };

          localStorage.setItem(
            "purchase_summary",
            JSON.stringify(summary)
          );
          localStorage.removeItem("current_transaction");

          setStatusText("Pago confirmado");
          setIsSuccess(true);
        }

      }

      setProgress(current);
    }, 180);
  }

  return {
    total,
    isProcessing,
    isSuccess,
    progress,
    statusText,
    transactionId: transaction.id,
    paymentMethod: transaction.method,
    purchaseDate: transaction.date,
    merchant,
    handleConfirmPurchase,
  };
}
