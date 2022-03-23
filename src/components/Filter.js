import React, { useContext } from 'react'
import styled from 'styled-components'
import BikesContext from '../context/BikesContext'
import InputRange from './InputRange'
const Filter = () => {
  const { brand, setBrand, category, setCategory, price } =
    useContext(BikesContext)
  return (
    <StyledFilter>
      <div className="content-wrapper">
        <StyledOption className="brand-container">
          <h3>Marcas</h3>
          <select
            name="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="all">Todas</option>
            <option value="ducati">Ducati</option>
            <option value="mv agusta">MV Agusta</option>
            <option value="yamaha">Yamaha</option>
          </select>
        </StyledOption>
        <StyledOption className="category-container">
          <h3>Categoria</h3>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Todas</option>
            <option value="super-sport">Super Sport</option>
            <option value="naked">Naked</option>
          </select>
        </StyledOption>
        <StyledOption className="range-container">
          <h3 className="item1">Precio Máximo</h3>
          <InputRange className="item2" />
          <p className="item3">
            <span className="price-txt">Precio max:</span>{' '}
            {Number(price).toLocaleString()}€
          </p>
        </StyledOption>
      </div>
    </StyledFilter>
  )
}

// Styles
const StyledFilter = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 2px solid #000;

  .content-wrapper {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 1349px) {
      .range-container {
        width: auto;
      }
    }
  }

  @media (max-width: 767px) {
    height: auto;
    padding: 35px 5%;
    .content-wrapper {
      width: auto;
      flex-direction: column;
    }
    .brand-container,
    .category-container {
      display: flex;
      padding: 0;
      justify-content: space-between;
      height: 35px;
      width: 100%;
      margin-bottom: 20px;
      h3 {
        font-size: 14px;
        width: 140px;
        padding: 0;
        margin: 0;
        text-align: left;
        line-height: 37px;
      }
      select {
        width: 156px;
        margin-left: 2rem;
        font-size: 12px;
      }
    }
    .range-container {
      width: 100%;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: 'a b c';
      .item1 {
        grid-area: a;
        font-size: 14px;
        width: 140px;
        padding: 0;
        margin: 0;
        text-align: left;
        line-height: 24px;
      }
      .item2 {
        grid-area: c;
      }
      .item3 {
        text-align: center;
        grid-area: b;
        padding: 0;
        padding-top: 5px;
        .price-txt {
          display: none;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .brand-container,
    .category-container {
      h3 {
        font-size: 12px;
        width: auto;
      }
      select {
        width: 120px;
        margin-left: 0;
      }
    }
    .range-container {
      .item1 {
        font-size: 12px;
        width: auto;
      }
    }
  }
  @media (max-width: 450px) {
  }
`
const StyledOption = styled.div`
  height: 100%;
  width: 20%;
  min-width: 190px;
  padding: 0rem 1rem;

  h3 {
    padding: 1rem;
    margin-bottom: 1rem;
  }
  p {
    padding: 1rem;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, #dc143c 50%),
      linear-gradient(135deg, #dc143c 50%, transparent 50%);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
    width: 100%;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    color: #dc143c;
    border: 1px solid #000;
    border-radius: 3px;
    font-weight: bold;
    &:focus {
      outline: 0;
    }
  }

  select {
    cursor: pointer;
  }
`

export default Filter
