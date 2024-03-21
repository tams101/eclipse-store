import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";
import CheckoutItem from "../Components/CheckoutItem";
import { Product } from "../../utils/api";
import {Mastercard, Visa, Paypal, Amex} from 'react-payment-logos/dist/flat'
import { Link } from "react-router-dom";

function Checkout() {
  const { basketItems, clearBasket, removeFromBasket, getBasketTotal } =
    useContext(BasketContext);

  let basketTotal = getBasketTotal().toFixed(2);

  return (
    <div className="bg-sky-50 h-svh">
      <div className="flex justify-between p-4 bg-sky-100">
        <p className="text-xl font-bold md:text-2xl lg:text-4xl">Checkout <span className="text-lg font-normal"> {basketItems.length} item{basketItems.length === 1 ? '' : 's'}</span></p>
        <button
          className="bg-slate-700 p-2 rounded-lg text-white"
          onClick={clearBasket}
        >
          Empty Basket
        </button>
      </div>

      <div className="grid md:px-10 md:grid-cols-2">
        {basketItems.length > 0 ? (
          <div>
            {basketItems.map((item: Product) => (
              <CheckoutItem item={item}/>
            ))}
          </div>
        ) : (
          <p className="text-xl md:text-2xl lg:text-4xl text-center">No items in basket</p>
        )}

        <div className="md:h-96 text-center border-2 m-4 md:w-1/2 bg-white mx-auto p-4">
          <p className="text-xl font-bold p-2 underline">Summary</p>
          <p>
            Total (excluding delivery):{" "}
            <span className="font-bold">£{basketTotal}</span>
          </p>
          <div className="flex justify-center space-x-4 my-4">
            <Amex width={60}/>
            <Mastercard width={60} />
            <Visa width={60}/>
            <Paypal width={60}/>
          </div>
          <button className="bg-slate-700 p-2 rounded-lg text-white" disabled={true}>
            Checkout
          </button>

          <Link to="/">
          <p className="p-4 underline">Continue Shopping</p>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
