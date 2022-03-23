import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// Context
import BikesContext from '../context/BikesContext'

const Brand = ({ name, text, img, height, width }) => {
  const { setBrand, resetFilters } = useContext(BikesContext)
  return (
    <StyledBrand className="brand-container">
      <div className="left-container">
        <img src={img} alt="brand" height={height} width={width} />
      </div>
      <div className="right-container">
        <h3>{name}</h3>
        <p>{text}</p>
        <Link
          className="btn"
          to="/store"
          onClick={() => {
            resetFilters()
            setBrand(name)
          }}
        >
          Ver Más
        </Link>
      </div>
    </StyledBrand>
  )
}

// Styles
const StyledBrand = styled.div`
  width: 90%;
  height: 30vh;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .left-container,
  .right-container {
    height: 90%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .right-container {
    padding: 30px 50px;
    border-left: 1px solid #dc143c;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }

  h3  {
    text-transform: uppercase;
  }

  p {
    text-align: center;
    padding: 14px;
  }

  img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: 50px;
  }

  a {
    position: relative;
    border: 1px solid #dc143c;
    color: #dc143c;
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
  @media (max-width: 1100px) {
    .right-container {
      padding: 30px 0px;
      padding-left: 50px;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
    height: 40vh;
    margin-bottom: 80px;
    img {
      height: 100px;
      width: 110px;
      padding: 0;
    }
    .left-container {
      width: 100%;
    }
    .right-container {
      width: 100%;
      padding: 0;
      padding-top: 20px;
      border-left: none;
      border-top: 1px solid #dc143c;
      justify-content: flex-start;
      gap: 5px;
    }
  }
`

export default Brand
