import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { Product, fetchSingleProduct } from "../../utils/api"
import { BasketContext } from "../Contexts/BasketContext"

function SingleItem() {
  const {product_id} = useParams()

  const [product, setProduct] = useState<Product>()
  const [loading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchSingleProduct(product_id).then((item) => {
      setProduct(item)
      setError('')
      setIsLoading(false)
      console.log(item)
    })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
      setError('Something went wrong.')
    })
  }, [product_id])

  const {addToBasket} = useContext(BasketContext)

  return ( loading ? <p>Loading...</p> : 
  <>
      {error ? <div className=" text-red-800 text-2xl font-bold flex justify-center h-screen">{error}</div> : 
    <div className="flex flex-col items-center p-4 mt-4 md:flex-row md:justify-center md:gap-10">
        <div className="mb-6">
          <img className="w-36 md:w-72" src={product?.image} alt={`Image of ${product?.title}`} />
        </div>
        
        <div className="flex flex-col justify-center gap-10 md:w-1/3">
          <p className="font-bold text-lg">{product?.title}</p>
          <p>Reviews {product?.rating.rate} / 5 ({product?.rating.count})</p>
          <p className="text-sm">Description: {product?.description}</p>
          <p className="font-bold">£{product?.price}</p>
          
          <button onClick={() => {addToBasket(product)}} className="bg-slate-700 p-2 rounded-lg w-20 md:w-36 mx-auto text-white">Add to basket</button>
        </div>
      </div>}
  
  </>
  )
}

export default SingleItem