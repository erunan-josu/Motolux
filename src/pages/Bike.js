import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Data } from '../Data'

// Components
import BikeIntro from '../components/BikeIntro'
import BikeDetails from '../components/BikeDetails'
import Carousel from '../components/Carousel'
import Dealer from '../components/Dealer'

const Bike = () => {
  const path = useParams().id
  const [myBike, setMyBike] = useState(null)
  /*  const getBike = () => setMyBike(Data.filter((bike) => bike.model === path)[0]) */

  useEffect(() => {
    setMyBike(Data.filter((bike) => bike.model === path)[0])
  }, [path])
  return (
    myBike && (
      <BikePage>
        <BikeIntro myBike={myBike} />
        <BikeDetails myBike={myBike} />
        <Carousel myBike={myBike} />
        <Dealer />
      </BikePage>
    )
  )
}

// Styles
const BikePage = styled.div`
  position: relative;
`

export default Bike
