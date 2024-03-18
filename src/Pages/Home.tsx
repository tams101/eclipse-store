import { Link } from "react-router-dom";

function Home() {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetchProducts()
  //     .then((data) => {
  //       setProducts(data);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    // <div className="">
    //   <div className="flex justify-center items-center h-36 bg-purple-800 text-white text-4xl font-bold">
    //     All the latest products you need!
    //   </div>
    //   <div className="flex justify-evenly">
    //     <div>Sort</div>
    //     <div>Filter</div>
    //   </div>
    //   <div className="flex flex-col md:grid grid-cols-2 m-20 lg:grid-cols-3">
    //     {products.map((product) => (
    //       <ProductCard product={product} />
    //     ))}
    //   </div>
    // </div>
    <div className="grid grid-cols-1 gap-5 h-96 md:grid-cols-2">
      <section className="text-white text-3xl flex justify-center items-center bg-purple-800">
        <Link to="/womens">Women's</Link>
      </section>
      <section className="text-white text-3xl flex justify-center items-center bg-teal-800">
        <Link to="/mens">Men's</Link>
      </section>
      <section className="text-white text-3xl flex justify-center items-center bg-yellow-600">
        <Link to="/jewelery">Jewelery</Link>
      </section>
      <section className="text-white text-3xl flex justify-center items-center bg-blue-800">
        <Link to="/electronics">Electronics</Link>
      </section>
    </div>
  );
}

export default Home;
