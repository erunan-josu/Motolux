import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
// Context
import BikesContext from '../context/BikesContext'
// Components
import Filter from '../components/Filter'
import MotoCard from '../components/MotoCard'

const Store = () => {
  const { filterBikes, bikes, brand, category, price } =
    useContext(BikesContext)

  useEffect(() => {
    filterBikes()
  }, [brand, category, price])
  return (
    <div>
      <Filter />
      <StyledStore>
        <div className="store-wrapper">
          {bikes.length < 1 ? (
            <p>No se ha encontrado ninguna moto de esas características</p>
          ) : (
            bikes.map((bike) => <MotoCard bike={bike} key={uuidv4()} />)
          )}
        </div>
      </StyledStore>
    </div>
  )
}

const StyledStore = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  padding: 7rem 5rem;

  .store-wrapper {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem;
    justify-items: center;
  }

  @media (max-width: 617px) {
    padding: 100px 10px;
  }
  @media (max-width: 570px) {
    padding: 50px 5%;
  }
  @media (max-width: 420px) {
    .store-wrapper {
      width: auto;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
  }
`

export default Store
