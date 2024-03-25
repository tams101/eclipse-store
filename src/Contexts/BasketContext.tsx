import { useEffect, useState, createContext, ReactNode } from "react";
import { Product } from "../../utils/api";

type BasketProviderProps = {
  children: ReactNode
}

export const BasketContext = createContext({});

export const BasketProvider = ({children} : BasketProviderProps) => {
  const [basketItems, setBasketItems] = useState(localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems') || "''") : [])

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
  }, [basketItems])

  useEffect(() => {
    const basket = localStorage.getItem("basketItems")

    if(basket) {
      setBasketItems(JSON.parse(basket))
    }
  }, [])

  const addToBasket = (item: Product) => {
    const isItemInBasket = basketItems.find((basketItem: Product) => basketItem.id === item.id )

    if (isItemInBasket) {
      setBasketItems(
        basketItems.map((basketItem: Product) => basketItem.id === item.id ? {...basketItem, quantity: basketItem.quantity + 1} : basketItem)
      )
    }
    else {
      setBasketItems([...basketItems, {...item, quantity: 1}])
    }
  }

  const removeFromBasket = (item: Product) => {
    const isItemInBasket = basketItems.find((basketItem: Product) => basketItem.id === item.id)

    if (isItemInBasket.quantity === 1) {
      setBasketItems(basketItems.filter((basketItem: Product) => basketItem.id !== item.id))
    } else {
      setBasketItems(
        basketItems.map((basketItem: Product) => 
          basketItem.id === item.id ? {...basketItem, quantity: basketItem.quantity - 1} : basketItem
        )
      )
    }
  }

  const clearBasket = () => {
    setBasketItems([])
  }

  const getBasketTotal = () => {
    return basketItems.reduce((total: number, item: Product) => total + item.price * item.quantity, 0)
  }

  return (
    <BasketContext.Provider value={{
      basketItems,
      addToBasket,
      removeFromBasket,
      clearBasket,
      getBasketTotal
    }}>
      {children}
    </BasketContext.Provider>
  )
}
