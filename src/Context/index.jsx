import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({
        title: "", price: "", description: "", images: []
    })

    // Product Detail - Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => {setIsProductDetailOpen(true)}
    const closeProductDetail = () => {setIsProductDetailOpen(false)}
    

    return (
        <ShoppingCartContext.Provider value={{count, setCount, openProductDetail, closeProductDetail, isProductDetailOpen, productToShow, setProductToShow}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
