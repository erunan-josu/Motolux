import React from 'react'
import styled from 'styled-components'
import Brand from './Brand'
import agusta_logo from '../assets/images/agusta/agusta_logo.png'
import ducati_logo from '../assets/images/ducati/ducati_logo.png'
import yamaha_logo from '../assets/images/yamaha/yamaha_logo.png'

const BrandsSection = () => {
  const ducatiTxt =
    'Actualmente considerada una de las marcas más importantes del sector del motociclismo comercial y deportivo.'
  const agustaTxt =
    'Empresa Italiana especializada en la construcción de motocicletas de lujo.'
  const yamahaTxt =
    'Bien conocida marca Japonesa que ha logrado numerosos títulos con auténticos mitos al manillar como son: Valentino Rossi, Jorge Lorenzo... '
  return (
    <StyledSection>
      <Brand
        name="ducati"
        text={ducatiTxt}
        img={ducati_logo}
        height={250}
        width={250}
      />
      <Brand
        name="mv agusta"
        text={agustaTxt}
        img={agusta_logo}
        height={250}
        width={300}
      />
      <Brand
        name="yamaha"
        text={yamahaTxt}
        img={yamaha_logo}
        height={250}
        width={300}
      />
    </StyledSection>
  )
}

// Styled
const StyledSection = styled.section`
  width: 100%;
  margin-bottom: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default BrandsSection
