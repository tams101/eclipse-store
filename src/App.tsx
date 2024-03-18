import Navbar from './Components/Navbar'
import Checkout from './Pages/Checkout'
import Electronics from './Pages/Electronics'
import Home from './Pages/Home'
import Jewelery from './Pages/Jewelery'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womens" element={<Womens />}/>
          <Route path="/mens" element={<Mens />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path='/electronics' element={<Electronics />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
    </>
  )
}

export default App
