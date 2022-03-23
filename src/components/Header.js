import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import BikesContext from '../context/BikesContext'

const Header = () => {
  const { resetFilters } = useContext(BikesContext)
  return (
    <StyledHeader>
      <ul className="header-wrapper">
        <li>
          <Link to="/store" id="tienda" onClick={resetFilters}>
            <FontAwesomeIcon icon={faMotorcycle} className="header-icon" />
            <p>tienda</p>
          </Link>
        </li>
        <li>
          <Link to="/" id="logo">
            <h1>motolux</h1>
          </Link>
        </li>
        <li id="cart">
          <Link to="/my-cart" id="my-cart">
            <FontAwesomeIcon icon={faCartShopping} className="header-icon" />
          </Link>
        </li>
      </ul>
    </StyledHeader>
  )
}

// Styles
const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  background: #000;
  color: #fff;
  .header-wrapper {
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    cursor: pointer;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #my-cart,
  #tienda {
    border-bottom: 2px solid #000;
    transition: all 300ms ease-in-out;
  }
  #my-cart:hover,
  #tienda:hover {
    border-bottom: 2px solid #dc143c;
  }
  a  {
    display: flex;
    align-items: center;
    justify-content: center;
    p  {
      padding: 1rem;
    }
  }
  .header-icon {
    padding: 1rem;
    font-size: 1.5rem;
  }
  #logo {
    letter-spacing: 5px;
    font-family: 'DM Serif Display', serif;
    color: #fff;
    border-bottom: 2px solid #dc143c;
    padding: 0px 10px;
  }

  @media (max-width: 750px) {
    p {
      display: none;
    }
    li {
      min-width: auto;
    }
  }
  @media (max-width: 650px) {
    h1 {
      font-size: 30px;
    }
    .header-icon {
      font-size: 1.2rem;
      padding: 0.7rem;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 25px;
    }
    .header-icon {
      font-size: 1rem;
      padding: 0.6rem;
    }
  }
`
export default Header
