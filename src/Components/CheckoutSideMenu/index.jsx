import { useContext } from "react";
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
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = shoppingCart.filter((p) => p.id != id);
    setShoppingCart(filteredProducts);
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
      <div className="px-6 overflow-y-scroll">
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
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total</span>
          <span className="font-medium text-2xl">${GetTotalPrice(shoppingCart)}</span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
