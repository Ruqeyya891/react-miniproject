import { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    // LocalStorage-dan oxuyur (əgər varsa)
    const saved = localStorage.getItem('wishlist')
    return saved ? JSON.parse(saved) : []
  })

  // LocalStorage-a yazir (hər dəyişikdə)
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
  }, [wishlistItems])

  // Favoritlərə əlavə edir
  const addToWishlist = (product) => {
    setWishlistItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev // Əgər varsa, əlavə etmə
      }
      return [...prev, product]
    })
  }

  // Favoritlərdən silir
  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId))
  }

  // Favoritdədirsə yoxlayir
  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId)
  }

  // Favoritləri təmizləyir
  const clearWishlist = () => {
    setWishlistItems([])
  }

  // Toggle (əlavə edib/sil)
  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      toggleWishlist,
      clearWishlist,
      itemCount: wishlistItems.length
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

// Custom hook
export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider')
  }
  return context
}