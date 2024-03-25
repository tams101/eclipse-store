import { Product } from "../../utils/api"

function ProductCard({product} : {product : Product}) {
  return (
    <article className="flex flex-wrap items-center justify-center rounded shadow-sm m-3 h-full p-2 md:flex-nowrap">
      <div>
        <img className="w-24 object-contain mx-auto md:w-36" src={product.image} alt={`Image of ${product.title}`} />
      </div>
      <div className="px-6 py-4">
        <p className="font-bold text-md mb-2">{product.title}</p>
        <p>£{product.price}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.category}</span>
      </div>
    </article>
  )
}

export default ProductCard