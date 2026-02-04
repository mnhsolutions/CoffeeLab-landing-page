import { createContext, useContext, useState, useMemo, useEffect } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


  //  Agregar producto
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id)

      // Si ya existe, aumenta cantidad
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      // Si no existe, lo agrega
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  //  Eliminar producto
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  //  Aumentar cantidad
  const increaseQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  //  Disminuir cantidad
  const decreaseQty = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  //  Vaciar carrito
  const clearCart = () => {
    setCart([])
  }

  //  Total de productos
  const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }, [cart])

  //  Precio total
  const totalPrice = useMemo(() => {
    return cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

//  Hook personalizado
export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider")
  }

  return context
}
