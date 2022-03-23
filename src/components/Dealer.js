import React from 'react'
import styled from 'styled-components'
// Components
import Title from './Title'
import DealerCard from './DealerCard'

const Dealer = () => {
  return (
    <StyledSection>
      <div className="section-wrapper">
        <Title text={'contacta con uno de nuestros dealers'} />
        <DealerCard />
      </div>
    </StyledSection>
  )
}

// Styles
const StyledSection = styled.section`
  padding: 100px 0px;
  margin-bottom: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  .title-comp {
    width: 50%;
    padding: 0;
  }
  .section-wrapper {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1140px) {
    .section-wrapper {
      flex-direction: column;
      .title-comp {
        width: 100%;
      }
    }

    @media (max-width: 580px) {
      padding: 0;
      h1 {
        font-size: 20px;
      }
    }
  }
`

export default Dealer
