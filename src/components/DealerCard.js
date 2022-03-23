import React, { useState } from 'react'
import styled from 'styled-components'
import ValidationMsg from './ValidationMsg'

const DealerCard = () => {
  const [msg, setMsg] = useState(false)
  const [name, setName] = useState('')
  const [validName, setValidName] = useState(null)
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(null)

  const validateEmail = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.match(validRegex)) {
      setValidEmail(true)
      return true
    } else {
      setValidEmail(false)
      return false
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    validateEmail(e)
  }

  const nameHandler = (e) => {
    const value = e.target.value
    setName(value)
    if (value.length > 0) {
      setValidName(true)
      return true
    }
    setValidName(false)
    return false
  }

  const submitForm = () => {
    if (validName === null) {
      setValidName(false)
    }
    if (validEmail === null) {
      setValidEmail(false)
    }
    if (validName && validEmail) {
      setMsg(true)
    }
  }

  return (
    <StyledCard>
      {msg ? (
        <p className="dealer-msg">
          <span>Gracias, </span> nos pondremos en contacto lo antes posible
        </p>
      ) : (
        <Form>
          <div className="container">
            <input
              type="text"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => nameHandler(e)}
              required
            />

            <ValidationMsg conditional={validName} val={name} />
          </div>

          <div className="container">
            <input
              type="text"
              placeholder="Tu Email"
              value={email}
              onChange={(e) => emailHandler(e)}
            />
            <ValidationMsg conditional={validEmail} val={email} />
          </div>

          <div className="container">
            <div className="send-btn btn" onClick={submitForm}>
              Enviar
            </div>
          </div>
        </Form>
      )}
    </StyledCard>
  )
}

// Styles
const StyledCard = styled.div`
  width: 50%;
  min-height: 300px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e9e9e9;
  background: #000;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(153, 153, 153, 0.07),
    0 2px 4px rgba(153, 153, 153, 0.07), 0 4px 8px rgba(153, 153, 153, 0.07),
    0 8px 16px rgba(153, 153, 153, 0.07), 0 16px 32px rgba(153, 153, 153, 0.07),
    0 32px 64px rgba(153, 153, 153, 0.07);
  span {
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 2em;
    color: #dc143c;
  }
  @media (max-width: 1140px) {
    width: 100%;
  }
`
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .container {
    height: 80px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  input {
    height: 60%;
    width: 80%;
    padding: 20px 20px 2px 20px;
    font-size: 1.2em;
    background: transparent;
    text-align: center;
    color: #666;
    border-bottom: 1px solid #666;
  }
  input:focus {
    background: rgba(102, 102, 102, 0.3);
  }
  .send-btn {
    cursor: pointer;
    position: relative;
    border: 1px solid #dc143c;
    color: #dc143c;
    z-index: 1;
    transition: all 300ms ease-in-out;
    &:hover {
      color: #e9e9e9;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
  .send-btn:before {
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
`

export default DealerCard
