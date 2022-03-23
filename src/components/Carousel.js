// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default function Carousel({ myBike }) {
  return (
    <StyledCarousel>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {myBike['imgs'].map((img) => (
          <SwiperSlide
            style={{ backgroundImage: `url("${img}")` }}
            key={uuidv4()}
          />
        ))}
      </Swiper>
    </StyledCarousel>
  )
}

const StyledCarousel = styled.section`
  width: 100%;
  margin: 130px 0;
  .swiper {
    width: 90%;
    height: 50vh;
  }
  @media (max-width: 580px) {
    margin: 0;
    .swiper {
      height: 90vw;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #dc143c;
  }

  .swiper-pagination-bullet-active {
    background: #dc143c;
  }
`
