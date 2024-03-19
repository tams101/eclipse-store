import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/api";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
import { Product } from "../../utils/api";

function SingleCategoryItems() {
  const { category_name } = useParams();
  let category: string;

  if (category_name === "womens") category = "women's clothing";
  if (category_name === "mens") category = "men's clothing";
  if (category_name === "electronics" || category_name === "jewelery")
    category = category_name;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProducts(category)
      .then((data) => {
        setProducts(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [category_name]);

  return loading ? (
    <div className="flex justify-center items-center">
      <p>Loading...</p>
    </div>
  ) : (
    <div className="">
      <div className="flex justify-center items-center h-24 bg-purple-800 text-white text-2xl font-bold md:text-3xl md:h-36">
        All the latest products you need!
      </div>

      <div className="grid grid-cols-1 md: grid-cols-2">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <ProductCard product={product} key={product.id} />
          </Link>
          
        ))}
      </div>
    </div>
  );
}

export default SingleCategoryItems;