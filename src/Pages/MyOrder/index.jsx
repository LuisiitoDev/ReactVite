import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const { orderId } = useParams();

  return (
    <div>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {orderId === undefined &&
          context.order
            .slice(-1)[0]
            .products.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.images}
                price={product.price}
              />
            ))}
        {orderId !== undefined &&
          context.order
            .filter((o) => o.id === orderId)[0]
            .products.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.images}
                price={product.price}
              />
            ))}
      </div>
    </div>
  );
}

export default MyOrder;
