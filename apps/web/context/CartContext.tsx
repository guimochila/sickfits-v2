import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface ICartContext {
  cartOpen: boolean
  setCartOpen: Dispatch<SetStateAction<boolean>>
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<ICartContext | null>(null)

interface ICartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: ICartProviderProps) {
  const [cartOpen, setCartOpen] = useState(false)

  const toggleCart = useCallback(() => setCartOpen(!cartOpen), [cartOpen])
  const openCart = useCallback(() => setCartOpen(true), [])
  const closeCart = useCallback(() => setCartOpen(false), [])

  const value = useMemo(
    () => ({ cartOpen, setCartOpen, toggleCart, openCart, closeCart }),
    [cartOpen, closeCart, openCart, toggleCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider.')
  }

  return context
}
