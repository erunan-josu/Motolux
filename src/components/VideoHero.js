import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Video1 from '../assets/video/video2.mp4'
// Context
import BikesContext from '../context/BikesContext'
// Components
import Opacity from './Opacity'

const VideoHero = () => {
  const { resetFilters } = useContext(BikesContext)
  const videoRef = useRef(null)
  const handlePlayVideo = () => {
    videoRef.current.play()
  }

  return (
    <StyledHero className="video-wrapper">
      <StyledVideo
        autoPlay={true}
        muted
        ref={videoRef}
        onEnded={handlePlayVideo}
      >
        <source type="video/mp4" src={Video1}></source>
      </StyledVideo>
      <Opacity />
      <div className="btn-wrapper">
        <Link to="/store" onClick={resetFilters}>
          Explorar
        </Link>
      </div>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  height: 90vh;
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  position: relative;

  .btn-wrapper {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 10%;
    padding: 0rem 5%;

    a {
      position: relative;
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 2rem 5rem;
      color: #fff;
      border: 1px solid #dc143c;
      border-radius: 5px;
      z-index: 1;
      transition: all 300ms ease-in-out;
      &:hover {
        color: #000;
      }
      &:hover::before {
        transform: scaleX(1);
      }
    }

    a:before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #dc143c;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 300ms ease-in-out;
      border-radius: 5px;
    }
  }
  @media (max-width: 650px) {
    margin: 0;
    .btn-wrapper {
      width: auto;
    }
    a {
      font-size: 30px;
    }
  }
  @media (max-width: 450px) {
    a {
      font-size: 25px;
    }
  }
  @media (max-width: 353px) {
    a {
      font-size: 20px;
    }
  }
`

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default VideoHero
