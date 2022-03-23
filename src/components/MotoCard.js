import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// Context
import BikesContext from '../context/BikesContext'
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Motocard = ({ bike }) => {
  const { brand, model, price, imgs } = bike
  const { addBikeHandler } = useContext(BikesContext)

  return (
    <StyledCard>
      <h2>{model}</h2>
      <h3>{brand}</h3>
      <img src={imgs[0]} alt="motorcycle" />
      <p>{price.toLocaleString() + ' €'}</p>
      <div className="btn-container">
        <Link to={`/store/${model}`} className="more-info">
          <FontAwesomeIcon icon={faCircleInfo} id="info-icon" />
          info
        </Link>
        <Link
          to="/my-cart"
          className="add-to animated-btn"
          onClick={() => addBikeHandler(bike, model)}
        >
          reservar
        </Link>
      </div>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 490px;
  min-width: 280px;
  max-width: 335px;
  color: #000;
  overflow: hidden;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 0 1px 9px rgba(153, 153, 153, 0.12),
    0 2px 2px rgba(153, 153, 153, 0.12), 0 4px 4px rgba(153, 153, 153, 0.12),
    0 8px 8px rgba(153, 153, 153, 0.12), 0 16px 16px rgba(153, 153, 153, 0.12);

  h2 {
    text-align: center;
    padding: 2rem 2rem 0rem 2rem;
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 30px;
    padding: 0rem 2rem 0rem 2rem;
  }
  img {
    height: 200px;
    width: 100%;
    padding: 0rem 2rem 0rem 2rem;
    margin-bottom: 20px;
  }
  p  {
    padding: 0rem 2rem 0rem 2rem;
    margin-bottom: 20px;
  }
  .btn-container {
    padding: 2rem;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #000;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    font-size: 12px;
    border-radius: 5px;
    min-width: 100px;
  }
  #info-icon {
    padding: 5px 0px;
    color: #fff;
  }
  .more-info {
    display: flex;
    justify-content: space-between;
    color: #fff;
    border: 1px solid #fff;
    transition: all 500ms ease-in-out;
    &:hover {
      border: 1px solid #dc143c;
      background: #dc143c;
    }
  }
  .add-to {
    background: #fff;
  }
  .animated-btn {
    position: relative;
    z-index: 1;
    transition: all 300ms ease-in-out;
    &:hover {
      color: #fff;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
  .animated-btn::before {
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
    border-radius: 5px;
  }

  @media (max-width: 390px) {
    .btn-container {
      padding: 2rem 1rem;
    }
  }
  @media (max-width: 370px) {
    img  {
      padding: 0;
    }
  }
`

export default Motocard
