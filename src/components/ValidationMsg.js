import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faBan } from '@fortawesome/free-solid-svg-icons'

const ValidationMsg = ({ conditional }) => {
  return (
    <StyledValidation className="validation-msg">
      {conditional !== null && (
        <StyledMsg>
          {conditional ? (
            <>
              <FontAwesomeIcon icon={faCircleCheck} className="icon valid" />
              <p className="valid">formato correcto</p>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faBan} className="icon error" />
              <p className="error">formato incorrecto</p>
            </>
          )}
        </StyledMsg>
      )}

      <StyledMsg />
    </StyledValidation>
  )
}

// Styles
const StyledValidation = styled.div`
  height: 40%;
  width: 80%;
  padding: 10px 20px;
`
const StyledMsg = styled.div`
  display: flex;
  justify-content: center;
  .icon {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
  }
  .valid {
    color: #1fa11f;
  }
  .error {
    color: #dc143c;
  }
  .hidden {
    display: none;
  }
  .visible {
    display: flex;
  }
`
export default ValidationMsg
