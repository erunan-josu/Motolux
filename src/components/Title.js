import React from 'react'
import styled from 'styled-components'

const Title = ({ text }) => {
  return (
    <StyledTitle className="title-comp">
      <div className="title-wrapper">
        <h1>{text}</h1>
      </div>
    </StyledTitle>
  )
}

// Styles
const StyledTitle = styled.div`
  height: 20vh;
  width: 100%;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  .title-wrapper {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    color: #000;
    font-size: 50px;
    text-align: center;
    text-transform: uppercase;
  }
  @media (max-width: 1050px) {
    h1 {
      font-size: 35px;
    }
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 25px;
    }
  }
  // ==============================

  /*   @media (max-width: 1033px) {
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 520px) {
    h1 {
      font-size: 25px;
    }
  } */
`

export default Title
