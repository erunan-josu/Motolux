import React from 'react'
import styled from 'styled-components'

const BookingConfirm = ({ setConfirm, confirmHandler }) => {
  return (
    <StyledConfirm>
      <div className="confirm-wrapper">
        <div className="title-container">
          <h2>reservas</h2>
        </div>
        <div className="btn-container">
          <div className="booking-btn btn" onClick={confirmHandler}>
            confirmar reserva
          </div>
        </div>
      </div>
    </StyledConfirm>
  )
}
const StyledConfirm = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  .confirm-wrapper {
    width: 90%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #000;
  }
  .title-container {
    height: 100%;
    letter-spacing: 2px;
  }
  .booking-btn {
    position: relative;
    border: 1px solid #000;
    z-index: 1;
    transition: all 300ms ease-in-out;
    &:hover {
      color: #e9e9e9;
      border: 1px solid #dc143c;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
  .booking-btn:before {
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
  @media (max-width: 750px) {
    .confirm-wrapper {
      padding: 20px;
    }
  }

  @media (max-width: 470px) {
    height: auto;
    padding-top: 50px;
    .confirm-wrapper {
      flex-direction: column;
      .title-container {
        margin-bottom: 20px;
      }
    }
  }
`
export default BookingConfirm
