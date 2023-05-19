import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const SliderMedia = () => {
  const [time, setTime] = useState(0);
  const [data, setData] = useState([
    "https://" + `picsum.photos/id/${Math.floor(Math.random() * 200)}/800/900`,
    "https://" + `picsum.photos/id/${Math.floor(Math.random() * 200)}/800/900`,
    "https://" + `picsum.photos/id/${Math.floor(Math.random() * 200)}/800/900`,
    "https://" + `picsum.photos/id/${Math.floor(Math.random() * 200)}/800/900`,
    "https://" + `picsum.photos/id/${Math.floor(Math.random() * 200)}/800/900`
  ]);

  useEffect(() => {
    let delay = Math.floor(Math.random() * (5500 - 3500 + 1)) + 3500;
    setTime(delay)
  }, [])

  
  return (
    <Container>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: time,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt='media'/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
margin-top: 30px;
width: 40%;
height: 35vh;
background-color: red;
position: relative;

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 768px) {
      width: 80%;
}

`;

export default SliderMedia