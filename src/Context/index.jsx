import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  const [productToShow, setProductToShow] = useState({});

  // ShoppingCart . Add products to cart
  const [shoppingCart, setShoppingCart] = useState([]);

  // Checkout Side Menu
  const [isCheckoutDetailOpen, setCheckoutDetailOpen] = useState(false);
  const openCheckoutSideMenu = () => setCheckoutDetailOpen(true)
  const closeCheckoutSideMenu = () => setCheckoutDetailOpen(false)


  return (
    <ShoppingCartContext.Provider value={{ 
      count, 
      setCount, 
      openProductDetail, 
      closeProductDetail, 
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      shoppingCart,
      setShoppingCart,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      isCheckoutDetailOpen,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
