import { useContext, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../Contexts/BasketContext";

function Navbar() {
  const { basketItems } = useContext(BasketContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sm:flex justify-between border-b sm:items-center sm:px-4 sm:py-3">
      <section className="flex justify-between px-4 py-3 sm:p-0">
        <div>
          <NavLink to="/">
            <div className="font-bold text-lg border-t-4 border-black md:text-2xl lg:text-4xl">
              ECLIPSE
            </div>
          </NavLink>
        </div>
        <div className="sm:hidden">
          <button
            className="block"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </section>

      <div
        
        className={`${isOpen ? "block" : "max-md:hidden"} sm:p-0 px-2 py-3 sm:flex`}
      >
        <NavLink
          className="block px-2 py-1 font-semibold hover:underline hover:bg-neutral-200 "
          to="/womens"
        >
          Women's
        </NavLink>

        <NavLink
          className="block mt-1 px-2 py-1 font-semibold hover:underline hover:bg-neutral-200 sm:mt-0 sm:ml-2"
          to="/mens"
        >
          Men's
        </NavLink>

        <NavLink
          className="block mt-1 px-2 py-1 font-semibold hover:underline hover:bg-neutral-200 sm:mt-0 sm:ml-2"
          to="/jewelery"
        >
          Jewellery
        </NavLink>

        <NavLink
          className="block mt-1 px-2 py-1 font-semibold hover:underline hover:bg-neutral-200 sm:mt-0 sm:ml-2"
          to="/electronics"
        >
          Electronics
        </NavLink>
        
        <div className="my-auto flex ml-2">
          <NavLink to="/checkout" className="md:my-auto">
            <FaBasketShopping size="24" />
          </NavLink>
  
            <p className="font-bold text-black ml-1">{basketItems.length}</p>

        </div>

        
      </div>
    </nav>

  );
}
export default Navbar;
