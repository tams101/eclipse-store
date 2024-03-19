import { useContext } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../Contexts/BasketContext";

function Navbar() {

  const {basketItems} = useContext(BasketContext)
  return (
    <div className="flex flex-col justify-between items-center pl-10 pr-10 self-center h-36 md:flex-row ">
      <NavLink to="/">
        <div className="font-bold text-lg border-t-4 border-black md:text-2xl lg:text-3xl">ECLIPSE</div>
      </NavLink>
      <div className="flex gap-4 md:gap-8 md:text-xl">
        <NavLink to="/womens">Women's</NavLink>

        <NavLink to="/mens">Men's</NavLink>

        <NavLink to="/jewelery">Jewelery</NavLink>

        <NavLink to="/electronics">Electronics</NavLink>
      </div>

      <NavLink to="/checkout">
        <div className="mt-4 md:mt-0">
          <p>{basketItems.length}</p>
          <FaBasketShopping size="32" />
        </div>
      </NavLink>
    </div>
  );
}
export default Navbar;
