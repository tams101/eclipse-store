import { Link } from "react-router-dom";

function Home() {
  

  return (
    <>
      <div className="h-36 flex justify-center items-center bg-slate-100">
        {/* <p className="text-center text-2xl md:text-3xl">All your shopping needs here at Eclipse!</p> */}
      </div>
      <div className="grid grid-cols-1 gap-5 h-96 py-4 px-4 md:grid-cols-2">
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
    
    </>
  );
}

export default Home;
