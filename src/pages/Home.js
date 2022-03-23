import React from 'react'

// Components
import VideoHero from '../components/VideoHero'
import BrandsSection from '../components/BrandsSection'
import Title from '../components/Title'

const Home = () => {
  return (
    <div>
      <VideoHero />
      <Title text={'Concesionario oficial de las mejores marcas'} />
      <BrandsSection />
    </div>
  )
}

export default Home
