import { useContext, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../Contexts/BasketContext";

function Navbar() {
  const { basketItems } = useContext(BasketContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    // <nav className="flex flex-col justify-between items-center pl-10 pr-10 self-center h-36 border-b md:flex-row ">
    //   <NavLink to="/">
    //     <div className="font-bold text-lg border-t-4 border-black md:text-2xl lg:text-3xl">ECLIPSE</div>
    //   </NavLink>
    //   <div className="flex gap-4 md:gap-8 md:text-xl">
    //     <NavLink className="hover:underline" to="/womens">Women's</NavLink>

    //     <NavLink className="hover:underline" to="/mens">Men's</NavLink>

    //     <NavLink className="hover:underline" to="/jewelery">Jewellery</NavLink>

    //     <NavLink className="hover:underline" to="/electronics">Electronics</NavLink>
    //   </div>

    //   <NavLink to="/checkout">
    //     <div className="mt-4 md:mt-0 relative">
    //       <div className="absolute left-8 bottom-4 font-bold bg-black text-white rounded-full px-2">{basketItems.length}</div>
    //       <FaBasketShopping size="32" />
    //     </div>
    //     <svg />
    //   </NavLink>
    // </nav>

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
