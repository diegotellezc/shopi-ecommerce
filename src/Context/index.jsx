import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  // Product Detail - Open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // Checkout Side Menu - Open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  // Notification when add product to cart
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        setOpenNotification,
        openNotification,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
