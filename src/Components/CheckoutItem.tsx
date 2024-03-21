import { BasketContext } from "../Contexts/BasketContext";
import { useContext } from "react";

function CheckoutItem({item}) {

  const { removeFromBasket, addToBasket } =
    useContext(BasketContext);
  return (
    <div key={item.id} className="border-2 p-5 m-4 rounded-sm flex gap-4 bg-white">
            <img className="w-24 object-contain" src={item.image} alt="" />
            <div className="p-2">
              <p>{item.title}</p>
              <p>£{item.price * item.quantity}</p>

              <div className="flex items-center space-x-4">
                <p>Quantity: </p>
                <button className="border-2 p-2 text-xl" onClick={() => {addToBasket(item)}}>+</button>
                <p>{item.quantity}</p>
                <button
                  className="border-2 p-2 text-xl"
                  onClick={() => {
                    removeFromBasket(item);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
  )
}

export default CheckoutItem