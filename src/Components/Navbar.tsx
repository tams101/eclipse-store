import { FaBasketShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex flex-col justify-between items-center pl-10 pr-10 self-center h-30 border-4 md:flex-row">
        <Link to="/">
         <div className="font-bold text-lg">ECLIPSE</div>
        </Link>
      <div className="flex gap-4">
        <Link to="/womens">
          <p>Women's</p>
        </Link>

        <Link to="/mens">
          <p>Men's</p>
        </Link>

        <Link to="/jewelery">
          <p>Jewelery</p>
        </Link>

        <Link to="/electronics">
          <p>Electronics</p>
        </Link>
      </div>

      <Link to="/checkout">
        <div className="mt-4 md:mt-0">
          <FaBasketShopping size="32" />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
