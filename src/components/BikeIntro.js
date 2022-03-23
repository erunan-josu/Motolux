import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BikesContext from '../context/BikesContext'

const BikeIntro = ({ myBike }) => {
  const { addBikeHandler } = useContext(BikesContext)
  const { imgs, brand, model, price } = myBike
  return (
    <StyledIntro>
      <StyledImg bg={imgs[1]}></StyledImg>
      <div className="container">
        <StyledName>
          <h2>{brand}</h2>
          <h1>{model}</h1>
        </StyledName>
        <div className="bottom-container">
          <p className="price">Precio: {price.toLocaleString() + ' €'}</p>
          <Link
            to="/my-cart"
            className="buy-btn btn"
            onClick={() => addBikeHandler(myBike, model)}
          >
            reservar
          </Link>
        </div>
      </div>
    </StyledIntro>
  )
}

const StyledIntro = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media (max-width: 971px) {
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(100px, 600px));
    grid-template-areas: 'name' 'img';
  }
  @media (max-width: 580px) {
    height: auto;
    grid-template-rows: 320px 350px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: 0px 50px;
    @media (max-width: 1625) {
      width: 40%;
    }
    @media (max-width: 971px) {
      width: 100%;
      .bottom-container {
        justify-content: space-between;
      }
    }
  }
  .bottom-container {
    width: 100%;
    padding: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .price {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a {
    position: relative;
    border: 1px solid #dc143c;
    color: #dc143c;
    margin-left: 70px;
    z-index: 1;
    transition: all 300ms ease-in-out;
    &:hover {
      color: #e9e9e9;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }

  a:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #dc143c;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms ease-in-out;
    z-index: -1;
  }

  @media (max-width: 1264px) {
    .bottom-container {
      padding: 20px;
      justify-content: flex-start;
    }
    .price {
      font-size: 12px;
    }
    a {
      font-size: 12px;
    }
  }
  @media (max-width: 1100px) {
    .container {
      padding: 0px 35px;
    }
  }
  @media (max-width: 580px) {
    .container {
      padding: 0 20px;
    }
    .bottom-container {
      padding: 10px 0;
    }
    a {
      margin-left: 5px;
      padding: 15px 25px;
    }
  }
`
const StyledImg = styled.div`
  height: 100%;
  width: 50%;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 80%;
  @media (max-width: 971px) {
    grid-area: img;
    width: 100%;
    background-position: center;
  }
  @media (max-width: 580px) {
    background-size: contain;
  }
`

const StyledName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 100px;
  text-shadow: 0px 4px 10px #686868;

  h1 {
    padding: 20px;
    font-size: 70px;
    border-left: 2px solid #000;
  }
  h2 {
    padding: 20px;
    font-size: 40px;
  }
  @media (max-width: 1625px) {
    h1  {
      font-size: 60px;
    }
    h2 {
      font-size: 35px;
    }
  }

  @media (max-width: 1414px) {
    h1  {
      font-size: 50px;
    }
    h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 1264px) {
    margin-bottom: 80px;
    h1  {
      font-size: 45px;
    }
    h2 {
      font-size: 25px;
    }
  }
  @media (max-width: 1100px) {
    margin: 0;
    margin-bottom: 50px;
    h1  {
      font-size: 35px;
    }
    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 971px) {
    grid-area: name;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 2px solid #000;
    h1  {
      border: none;
      text-align: right;
    }
  }
  @media (max-width: 580px) {
    flex-direction: column;
    h1  {
      font-size: 30px;
      text-align: center;
    }
  }
`

export default BikeIntro
