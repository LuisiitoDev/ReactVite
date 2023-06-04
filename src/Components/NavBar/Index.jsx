import NavItem from "../NavItem";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const NavBar = () => {
  const { count } = useContext(ShoppingCartContext);

  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex item-center gap-3">
        <li className="font-semibold text-lg">
          <NavItem to="/" children="Shopi" />
        </li>
        <li>
          <NavItem to="/" children="All" activeStyle={activeStyle} />
        </li>
        <li>
          <NavItem to="/clothes" children="Clothes" activeStyle={activeStyle} />
        </li>
        <li>
          <NavItem to="/electronics" activeStyle={activeStyle}>
            Electronics
          </NavItem>
        </li>
        <li>
          <NavItem to="/furnitures" activeStyle={activeStyle}>
            Furnitures
          </NavItem>
        </li>
        <li>
          <NavItem to="/toys" activeStyle={activeStyle}>
            Toys
          </NavItem>
        </li>
        <li>
          <NavItem to="/others" activeStyle={activeStyle}>
            Others
          </NavItem>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">luisitodev@dev.com</li>
        <li>
          <NavItem to="/myOrders" activeStyle={activeStyle}>
            My Orders
          </NavItem>
        </li>
        <li>
          <NavItem to="/myAccount" activeStyle={activeStyle}>
            My Account
          </NavItem>
        </li>
        <li>
          <NavItem to="/SignIn" activeStyle={activeStyle}>
            Sign In
          </NavItem>
        </li>
        <li>🛒 {count}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
