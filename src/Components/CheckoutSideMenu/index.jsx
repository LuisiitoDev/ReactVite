import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import OrderCard from "../OrderCard";
import { GetTotalPrice } from "../../Utils";

const CheckoutSideMenu = () => {
  const {
    isCheckoutDetailOpen,
    closeCheckoutSideMenu,
    shoppingCart,
    setShoppingCart,
    setOrder,
    order,
    setCount,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = shoppingCart.filter((p) => p.id != id);
    setShoppingCart(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      id: uuidv4(),
      date: new Date().toDateString(),
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: GetTotalPrice(shoppingCart),
    };
    setOrder([...order, orderToAdd]);
    setShoppingCart([]);
    setCount(0);
  };

  return (
    <aside
      className={`${
        isCheckoutDetailOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-5 border border-black rounded-lg bg-white scrollable-cards`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            onClick={() => closeCheckoutSideMenu()}
            className="h-6 w-6 text-black"
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {shoppingCart.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total</span>
          <span className="font-medium text-2xl">
            ${GetTotalPrice(shoppingCart)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-black py-3 text-white rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
