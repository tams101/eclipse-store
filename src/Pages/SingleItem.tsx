import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Product, fetchSingleProduct } from "../../utils/api"

function SingleItem() {
  const {product_id} = useParams()

  const [product, setProduct] = useState<Product>()
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
    fetchSingleProduct(product_id).then((item) => {
      setProduct(item)
      setIsLoading(false)
      console.log(item)
    })
  }, [product_id])

  return ( loading ? <p>Loading...</p> : 
  <div className="flex flex-col items-center p-4 md:flex-row">
      <div className="mb-6">
        <img className="w-36 md:w-96" src={product?.image} alt={`Image of ${product?.title}`} />
      </div>
      
      <div className="flex flex-col justify-center gap-10">
        <p className="font-bold text-lg">{product?.title}</p>
        <p>Description: {product?.description}</p>
        <p className="font-bold">£{product?.price}</p>
      </div>
    </div>
  )
}

export default SingleItem