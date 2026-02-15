import { createContext, useContext, useState, useEffect } from 'react'

const BasketContext = createContext()

export function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState(() => {
    // LocalStorage-dan oxuyur (əgər varsa)
    const saved = localStorage.getItem('basket')
    return saved ? JSON.parse(saved) : []
  })

  // LocalStorage-a yazir (hər dəyişikdə)
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketItems))
  }, [basketItems])

  // Səbətə məhsul əlavə edir
  const addToBasket = (product) => {
    setBasketItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        // Əgər varsa, sayını artirir
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      // Yeni məhsul əlavə edir
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // Səbətdən məhsul silir
  const removeFromBasket = (productId) => {
    setBasketItems(prev => prev.filter(item => item.id !== productId))
  }

  // Məhsul sayını dəyişir
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromBasket(productId)
      return
    }
    setBasketItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  // Səbəti təmizləyir
  const clearBasket = () => {
    setBasketItems([])
  }

  // Ümumi məbləğ hesablayir
  const total = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  // Məhsul sayı
  const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <BasketContext.Provider value={{
      basketItems,
      addToBasket,
      removeFromBasket,
      updateQuantity,
      clearBasket,
      total,
      itemCount
    }}>
      {children}
    </BasketContext.Provider>
  )
}

// Custom hook
export function useBasket() {
  const context = useContext(BasketContext)
  if (!context) {
    throw new Error('useBasket must be used within BasketProvider')
  }
  return context
}