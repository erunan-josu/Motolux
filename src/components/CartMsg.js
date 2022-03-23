import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BikesContext from '../context/BikesContext'

const CartMsg = ({ text }) => {
  const { resetFilters } = useContext(BikesContext)
  return (
    <StyledMsg>
      <p className="empty-cart-txt">{text}</p>
      <Link to="/store" className="btn" onClick={resetFilters}>
        ver gama
      </Link>
    </StyledMsg>
  )
}
const StyledMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    margin-bottom: 100px;
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
`
export default CartMsg
