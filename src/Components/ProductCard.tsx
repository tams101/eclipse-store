import { Product } from "../../utils/api"

function ProductCard({product} : {product : Product}) {
  return (
    <div className="text-center rounded shadow-sm m-3">
      <img className="w-24 object-contain mx-auto" src={product.image} alt={`Image of ${product.title}`} />
      <div className="px-6 py-4">
        <p className="font-bold text-md mb-2">{product.title}</p>
        <p>£{product.price}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.category}</span>
      </div>
    </div>
  )
}

export default ProductCard