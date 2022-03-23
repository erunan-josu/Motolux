import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <StyledContent>
          <h1>motolux</h1>
        </StyledContent>
        <StyledIcons>
          <li>
            <a
              href="https://github.com/erunan-josu"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/josu-hern%C3%A1ndez-preciado-76966a205/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/dev_josu"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
          </li>
        </StyledIcons>
        <StyledContent>
          <p>
            Copyright © 2022 Motolux Motor Holding S.p.A – A Sole Shareholder
            Company - A Company subject to the Management and Coordination
            activities of AUDI AG. All rights reserved.
          </p>
        </StyledContent>
        <StyledLinks>
          <li>terminos de uso</li>
          <li>información de privacidad</li>
          <li>información sobre las cookies</li>
        </StyledLinks>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 30vh;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  color: #666;
  background: #000;
  .footer-wrapper {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 450px) {
    height: auto;
    .footer-wrapper {
      width: 90%;
    }
  }
`
const StyledContent = styled.div`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    padding-left: 5px;
    text-align: center;
    letter-spacing: 5px;
    font-family: 'DM Serif Display', serif;
    border-bottom: 2px solid #555;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
  @media (max-width: 650px) {
    p {
      font-size: 10px;
    }
    h1 {
      font-size: 30px;
    }
  }
`
const StyledIcons = styled.ul`
  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  li {
    display: flex;
    padding: 0px 20px;
    transition: all 300ms ease-in-out;
    svg {
      transition: 300ms;
    }
    &:hover svg {
      color: #dc143c;
    }
  }
  .icon {
    font-size: 1.5em;
  }
`

const StyledLinks = styled.ul`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  li {
    text-align: center;
    width: 30%;
  }
  li:first-child {
    text-align: left;
  }
  li:last-child {
    text-align: right;
  }
  @media (max-width: 650px) {
    li {
      font-size: 10px;
    }
  }
`
export default Footer
