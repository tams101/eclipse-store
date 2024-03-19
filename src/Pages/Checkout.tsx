import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";

function Checkout() {
  const { basketItems, clearBasket, removeFromBasket, getBasketTotal } =
    useContext(BasketContext);

  let basketTotal = getBasketTotal().toFixed(2);
  console.log(basketItems);
  return (
    <div>
      <div className="flex justify-between mx-4">
        <h3 className="text-xl font-bold">Checkout</h3>
        <button
          className="bg-slate-700 p-2 rounded-lg text-white"
          onClick={clearBasket}
        >
          Clear Basket
        </button>
      </div>
      {basketItems.length > 0 ? (
        basketItems.map((item) => (
          <div key={item.id} className="border-2 p-5 m-4 rounded-sm flex gap-4">
            <img className="w-24 object-contain" src={item.image} alt="" />
            <div className="">
              <p>{item.title}</p>
              <p>£{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: £{item.price * item.quantity}</p>
              <button
                className="bg-slate-700 p-1 rounded-lg text-white mt-2"
                onClick={() => {
                  removeFromBasket(item);
                }}
              >
                Remove Item
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No items in basket</p>
      )}

      <div className="h-48 text-center border-2 m-4">
        <p className="text-xl font-bold p-2 underline">Summary</p>
        <p>
          Total (excluding delivery):{" "}
          <span className="font-bold">£{basketTotal}</span>
        </p>
        <button className="bg-slate-700 p-2 rounded-lg text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
