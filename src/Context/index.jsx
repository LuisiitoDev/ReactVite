import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [productToShow, setProductToShow] = useState({});

  // ShoppingCart . Add products to cart
  const [shoppingCart, setShoppingCart] = useState([]);

  // Checkout Side Menu
  const [isCheckoutDetailOpen, setCheckoutDetailOpen] = useState(false);
  const openCheckoutSideMenu = () => setCheckoutDetailOpen(true);
  const closeCheckoutSideMenu = () => setCheckoutDetailOpen(false);

  // ShoppingCart . Order
  const [order, setOrder] = useState([]);

  // Get Products
  const [items, setItems] = useState(null);
  const [filtereditems, setFilteredItems] = useState(null);

  // Get Products
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      })
      .catch((err) => {
        alert("ups! ocurrio un error inespeado, intenta de nuevo.");
      });
  }, []);

  const filterdItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filterdItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle]);

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
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
        setOrder,
        order,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filtereditems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
