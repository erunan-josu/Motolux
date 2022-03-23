import React, { useContext } from 'react'
import styled from 'styled-components'
import BikesContext from '../context/BikesContext'

const BookingCard = ({ bike, deleteBookingHandler }) => {
  const { brand, model, amount, imgs } = bike
  const totalPrice = bike.price
  const iva = totalPrice * 0.21
  const priceNoIva = totalPrice - iva
  const { booking } = useContext(BikesContext)

  return (
    <StyledCard className="booking-card">
      <StyledName>
        <h3>{brand + ' ' + model}</h3>
      </StyledName>
      <StyledAmount>
        <h3>cantidad: x{amount}</h3>
      </StyledAmount>
      <StyledImg img={imgs[0]} />
      <StyledDetails>
        <div className="price">
          <p>precio sin iva</p>
          <p>{(priceNoIva * amount).toLocaleString() + ' €'}</p>
        </div>
        <div className="price">
          <p>21% iva</p>
          <p>{(iva * amount).toLocaleString() + ' €'}</p>
        </div>
        <div className="price">
          <p>precio total</p>
          <p className="total-price">
            {(totalPrice * amount).toLocaleString() + ' €'}
          </p>
        </div>
        <div
          className="delete-btn btn"
          onClick={() => {
            deleteBookingHandler(booking, model)
          }}
        >
          eliminar
        </div>
      </StyledDetails>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 300px;
  margin-bottom: 100px;
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: 20% 80%;
    grid-template-areas: 'name amount' 'img price';
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: 75px 75px 200px 300px;
    grid-template-areas: 'name' 'amount' 'img' 'price';
    height: auto;
  }
`
const StyledName = styled.div`
  height: 100%;
  width: 10%;
  max-width: 150px;
  min-width: 117px;
  background: #000;
  color: #e9e9e9;
  border-bottom: 2px solid #000;
  display: flex;
  align-items: center;
  h3 {
    transform: rotate(-90deg);
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: none;
    grid-area: name;
    justify-content: center;
    h3 {
      transform: rotate(0);
      text-align: center;
      font-size: 14px;
    }
  }
`
const StyledAmount = styled.div`
  height: 100%;
  width: 10%;
  max-width: 150px;
  min-width: 117px;
  display: flex;
  align-items: center;
  h3 {
    transform: rotate(-90deg);
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: none;
    grid-area: amount;
    background: #000;
    color: #e9e9e9;
    justify-content: center;
    h3 {
      transform: rotate(0);
      font-size: 14px;
    }
  }
`

const StyledImg = styled.div`
  width: 50%;
  height: 100%;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 950px) {
    width: 100%;
    grid-area: img;
    border-left: 2px solid #000;
  }
  @media (max-width: 670px) {
    border-right: 2px solid #000;
  }
`

const StyledDetails = styled.div`
  height: 100%;
  width: 30%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid #000;

  .price {
    height: 50px;
    padding: 5px 10px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 2px solid #000;
  }
  .delete-btn {
    text-align: center;
    border: 1px solid #dc143c;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #e9e9e9;
      background: #dc143c;
    }
  }
  @media (max-width: 1000px) {
    width: 25%;
    .delete-btn  {
      font-size: 12px;
    }
  }
  @media (max-width: 950px) {
    width: 100%;
    grid-area: price;
    padding: 10px;
  }
  @media (max-width: 670px) {
    border-left: 2px solid #000;
  }
`

export default BookingCard
