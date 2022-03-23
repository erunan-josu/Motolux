import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
// Context
import BikesContext from '../context/BikesContext'
// Components
import BookingCard from '../components/BookingCard'
import BookingConfirm from '../components/BookingConfirm'
import CartMsg from '../components/CartMsg'

const MyCart = () => {
  const { booking, setBooking } = useContext(BikesContext)
  const [confirm, setConfirm] = useState(false)
  const emptyTxt = 'Actualmente no tienes ninguna moto seleccionada.'
  const confirmTxt = 'Gracias, tu reserva se ha realizado con exito.'

  const deleteBookingHandler = (arr, name) => {
    const newArr = arr.filter((bike) => bike.model !== name)
    setBooking(newArr)
  }
  const confirmHandler = () => {
    if (booking.length > 0) {
      setConfirm(true)
      setBooking([])
    }
  }

  return (
    <StyledCart>
      <BookingConfirm
        confirm={confirm}
        setConfirm={setConfirm}
        confirmHandler={confirmHandler}
      />

      <StyledContainer>
        {booking.length > 0 ? (
          booking.map((bike) => (
            <BookingCard
              bike={bike}
              deleteBookingHandler={deleteBookingHandler}
              key={uuidv4()}
            />
          ))
        ) : (
          <CartMsg text={confirm ? confirmTxt : emptyTxt} />
        )}
      </StyledContainer>
    </StyledCart>
  )
}

const StyledCart = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .empty-cart-txt {
    font-size: 30px;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }
`
const StyledContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export default MyCart
