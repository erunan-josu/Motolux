import React from 'react'
import styled from 'styled-components'

const BikeDetails = ({ myBike }) => {
  return (
    <Details>
      <div className="details-wrapper">
        <h2>Especificaciones</h2>
        <StyledList>
          <ul>
            <li>
              Motor : <span>{myBike.engine}</span>
            </li>
            <li>
              CV : <span>{myBike.cv}</span>
            </li>
            <li>
              Cilindrada : <span>{myBike.cc}</span>
            </li>
            <li>
              Velocidad máxima : <span>{myBike.max_speed + ' km/h'}</span>
            </li>
            <li>
              Peso : <span>{myBike.weight + ' Kg'}</span>
            </li>
          </ul>
        </StyledList>
      </div>
    </Details>
  )
}

const Details = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #000;
  color: #fff;

  .details-wrapper {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;

    h2 {
      letter-spacing: 2px;
      padding: 0px 50px;
      text-align: center;
    }
  }
  @media (max-width: 846px) {
    height: auto;
    .details-wrapper {
      padding: 80px 0px;
      flex-direction: column;
      h2 {
        padding: 10px 30px;
        border-bottom: 2px solid #e9e9e9;
        width: 90%;
      }
    }
  }
  @media (max-width: 450px) {
    height: auto;
    .details-wrapper {
      h2 {
        width: 100%;
      }
    }
  }
`

const StyledList = styled.div`
  /* padding: 20px; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-left: 2px solid #e9e9e9;

  li {
    color: #dc143c;
    padding: 50px;
    text-transform: uppercase;
    font-weight: bold;
  }

  span {
    color: #fff;
    font-size: 24px;
    padding: 0px 20px;
  }
  @media (max-width: 1100px) {
    span {
      font-size: 18px;
    }
  }
  @media (max-width: 846px) {
    border: none;
    font-size: 14px;
    span  {
      font-size: 14px;
    }
    li {
      padding: 30px 0px;
    }
  }

  /*   img {
    height: 400px;
    width: 500px;
  } */
`
export default BikeDetails
