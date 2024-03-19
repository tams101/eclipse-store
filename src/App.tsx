import Navbar from './Components/Navbar'
import Checkout from './Pages/Checkout'
import Home from './Pages/Home'
import SingleCategoryItems from './Pages/SingleCategoryItems'
import SingleItem from './Pages/SingleItem'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category_name" element={<SingleCategoryItems />}/>
          <Route path="/product/:product_id" element={<SingleItem />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
    </>
  )
}

export default App
