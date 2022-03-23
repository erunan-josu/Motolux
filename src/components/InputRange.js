import React, { useContext, useState } from 'react'
import styled from 'styled-components'
// Context
import BikesContext from '../context/BikesContext'

const InputRange = () => {
  const { maxPrice, price, setPrice } = useContext(BikesContext)
  let [fillPercentage, setFillPercentage] = useState(maxPrice + 500)

  return (
    <InputContainer>
      <span className="bar">
        <Fill style={{ width: `${fillPercentage}%` }} />
      </span>
      <input
        type="range"
        value={price}
        min={0}
        max={maxPrice + 500}
        step={500}
        className="slider"
        onChange={(e) => {
          setPrice(e.target.value)
          setFillPercentage((e.target.value * 100) / maxPrice)
        }}
      />
    </InputContainer>
  )
}

// Styles
const InputContainer = styled.div`
  margin-left: 1rem;
  position: relative;
  .bar  {
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 0;
    width: 100%;
    height: 5px;
    background: rgba(44, 44, 43, 0.5);
    border-radius: 5px;
    overflow: hidden;
  }

  .slider {
    -webkit-appearance: none;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 5px;
    background: blue;
    border-radius: 5px;
    background: transparent;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 5px;
    height: 20px;
    background: #dc143c;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 0 0 rgba(98, 0, 238, 0.1);
    transition: all.3s ease-in-out;
    &:hover  {
      box-shadow: 0 0 0 10px rgba(20, 20, 20, 0.1);
    }
  }
  @media (max-width: 767px) {
    margin-left: 2rem;
    width: 156px;
  }
  @media (max-width: 450px) {
    margin-left: 1rem;
    width: 120px;
  }
`
const Fill = styled.span`
  display: block;
  height: 100%;
  background: #dc143c;
`

export default InputRange
