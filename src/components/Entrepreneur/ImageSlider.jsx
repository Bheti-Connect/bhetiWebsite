import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './ImageSlider.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../assets/images/_DSC0114.jpg';
import slide_image_3 from '../../assets/images/_DSC0160.jpg';
import slide_image_4 from '../../assets/images/_DSC1244.jpg';
import slide_image_5 from '../../assets/images/_DSC1311.jpg';
import slide_image_7 from '../../assets/images/_DSC1651.jpg';
import slide_image_8 from '../../assets/images/C0001T01.jpg';
import slide_image_9 from '../../assets/images/C0003T01.jpg';
import slide_image_10 from '../../assets/images/C0006T01.jpg';



const ImageSlider = () => {
    return (
        <div className="main">
            <div className="container">
        <h1 className="heading">Ils nous ont fait confiance</h1>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
        >
            <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
            
            <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide_image_8} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide_image_9} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide_image_10} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
                <BsFillArrowLeftCircleFill className='arrows' />
            </div>
            <div className="swiper-button-next slider-arrow">
                <BsFillArrowRightCircleFill className='arrows'  />
            </div>
            <div className="swiper-pagination"></div>
            </div>
        </Swiper>
        </div>
        </div>
        
    )
}

export default ImageSlider;