import { createContext, useState } from 'react'
import { Data } from '../Data'
const BikesContext = createContext()

const BikesContextProvider = ({ children }) => {
  const maxPrice = Math.max(...Data.map((item) => item.price))
  const [bikes, setBikes] = useState([])
  const [category, setCategory] = useState('all')
  const [brand, setBrand] = useState('all')
  const [price, setPrice] = useState(maxPrice)
  const [booking, setBooking] = useState([])

  const filterBikes = () => {
    let newArr = Data
    if (brand !== 'all') {
      newArr = newArr.filter((item) => item.brand === brand)
    }
    if (category !== 'all') {
      newArr = newArr.filter((item) => item.category === category)
    }

    newArr = newArr.filter((item) => item.price <= price)
    setBikes(newArr)
  }

  const resetFilters = () => {
    setBrand('all')
    setCategory('all')
    setPrice(maxPrice + 100)
  }

  const addBikeHandler = (bike, model) => {
    const exist = booking.filter((elem) => {
      return elem.model === model
    })

    if (exist.length > 0) {
      bike.amount += 1
    } else {
      bike.amount = 1
      setBooking([...booking, bike])
    }
  }

  const data = {
    bikes,
    setBikes,
    brand,
    setBrand,
    category,
    setCategory,
    maxPrice,
    price,
    setPrice,
    filterBikes,
    resetFilters,
    booking,
    setBooking,
    addBikeHandler,
  }
  return <BikesContext.Provider value={data}>{children}</BikesContext.Provider>
}

export { BikesContextProvider }
export default BikesContext
