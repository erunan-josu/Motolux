import GlobalStyles from './GlobalStyles'
import { Routes, Route } from 'react-router-dom'
// Context
import { BikesContextProvider } from './context/BikesContext'
// Components
import Header from './components/Header'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import Store from './pages/Store'
import Bike from './pages/Bike'
import MyCart from './pages/MyCart'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BikesContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<Bike />} />
          <Route path="/my-cart" element={<MyCart />} />
        </Routes>
      </BikesContextProvider>
      <Footer />
    </div>
  )
}

export default App
