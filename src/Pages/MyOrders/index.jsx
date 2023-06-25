import { useContext } from "react";
import OrdersCard from "../../Components/OrdersCards";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <div>
      <div className="flex items-center justify-center w-80 relative">
        <h1>My Order</h1>
      </div>
      {context.order.map((or, index) => (
          <Link key={index} to={`/my-orders/${or.id}`}>
            <OrdersCard
              totalProducts={or.totalProducts}
              totalPrice={or.totalPrice}
            />
          </Link>
        ))}
    </div>
  );
}

export default MyOrders;
