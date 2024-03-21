import { useContext } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../Contexts/BasketContext";

function Navbar() {

  const {basketItems} = useContext(BasketContext)
  return (
    <nav className="flex flex-col justify-between items-center pl-10 pr-10 self-center h-36 border-b md:flex-row ">
      <NavLink to="/">
        <div className="font-bold text-lg border-t-4 border-black md:text-2xl lg:text-3xl">ECLIPSE</div>
      </NavLink>
      <div className="flex gap-4 md:gap-8 md:text-xl">
        <NavLink className="hover:underline" to="/womens">Women's</NavLink>

        <NavLink className="hover:underline" to="/mens">Men's</NavLink>

        <NavLink className="hover:underline" to="/jewelery">Jewellery</NavLink>

        <NavLink className="hover:underline" to="/electronics">Electronics</NavLink>
      </div>

      <NavLink to="/checkout">
        <div className="mt-4 md:mt-0 relative">
          <div className="absolute left-8 bottom-4 font-bold bg-black text-white rounded-full px-2">{basketItems.length}</div>
          <FaBasketShopping size="32" />
        </div>
      </NavLink>
    </nav>
  );
}
export default Navbar;
