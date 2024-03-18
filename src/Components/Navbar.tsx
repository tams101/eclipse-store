import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col justify-between items-center pl-10 pr-10 self-center h-36 border-4 md:flex-row ">
      <NavLink to="/">
        <div className="font-bold text-lg">ECLIPSE</div>
      </NavLink>
      <div className="flex gap-4 md:gap-8">
        <NavLink to="/womens">Women's</NavLink>

        <NavLink to="/mens">Men's</NavLink>

        <NavLink to="/jewelery">Jewelery</NavLink>

        <NavLink to="/electronics">Electronics</NavLink>
      </div>

      <NavLink to="/checkout">
        <div className="mt-4 md:mt-0">
          <FaBasketShopping size="32" />
        </div>
      </NavLink>
    </div>
  );
}
export default Navbar;
