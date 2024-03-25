import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="px-3 py-5 bg-stone-50  lg:py-10 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center h-fit gap-5 md:gap-20 md:flex-row">
          <div>
            <img className="rounded-md object-contain h-[200px] lg:h-[350px]" src="../../images/hero.jpg" alt="Someone browsing clothes on a rack" />
          </div>

          <div>
            <p className="text-center text-xl md:text-3xl font-semibold">
              All your shopping needs here at Eclipse!
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-5 p-8 place-items-center md:grid-cols-2 lg:grid-cols-4">
        <Link to="/womens">
          <div className="relative hover:-translate-y-1 hover:scale-105 duration-300">
            <img className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover opacity-90" src="../../images/womens.jpg" alt="Woman posing showing the gold bracelets around her wrists" />
            <div className="absolute top-[75px] left-[46px] lg:left-[100px] lg:top-[125px] text-3xl text-white">
              Womens
            </div>
          </div>
        </Link>

        <Link to="/mens">
          <div className="relative hover:-translate-y-1 hover:scale-105 duration-300">
            <img className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover opacity-90"src="../../images/mens.jpg" alt="A young man sat down on a wall looking into the distance" />
            <div className="absolute top-[75px] left-[68px] lg:left-[125px] lg:top-[125px] text-3xl text-white">
              Mens
            </div>
          </div>
        </Link>

        <Link to="/jewelery">
          <div className="relative hover:-translate-y-1 hover:scale-105 duration-300">
            <img className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover opacity-90" src="../../images/jewellery.jpg" alt="Different types of jewellery laid on a table" />
            <div className="absolute left-[50px] top-[75px] lg:left-[100px] lg:top-[125px] text-3xl text-white">
              Jewellery
            </div>
          </div>
        </Link>

        <Link to="/electronics">
          <div className="relative hover:-translate-y-1 hover:scale-105 duration-300">
            <img className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover opacity-90" src="../../images/electronics.jpg" alt="Electronic items including an iPhone laid out neatly on a white table" />
            <div className="absolute left-[30px] top-[75px] lg:left-[75px] lg:top-[125px] text-3xl text-white">
              Electronics
            </div>
          </div>
        </Link>

      </section>

      
    </>
  );
}

export default Home;
