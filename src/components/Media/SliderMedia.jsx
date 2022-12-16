import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import styled from 'styled-components';

const SliderMedia = ({ items, item_key }) => {

    const convertInHundred = (table) => {
        return table.length * 100 - 100;
    }
    
      let value = 0;
      let compteur = 0;
      const handleRightSlide = (i) => {
        const slide = document.querySelector(`#slide${i}`);
        const ItemSlide = slide.querySelectorAll(".slide_img .images");
        value = value - 100;
        compteur++;
        ItemSlide.forEach((item, i) => {
          if (compteur < ItemSlide.length) {
            item.style.transform = `translateX(${value}%)`;
          } else {
            compteur = 0;
            value = 0;
            item.style.transform = `translateX(${0}%)`;
          }
        });
      };
      const handleLeftSlide = (i) => {
        const slide = document.querySelector(`#slide${i}`);
        const ItemSlide = slide.querySelectorAll(".slide_img .images");
        if (compteur !== 0) {
          compteur--;
          value = value + 100;
          ItemSlide.forEach((item, i) => {
            item.style.transform = `translateX(${value}%)`;
          });
        } else {
          compteur = ItemSlide.length-1;
          value = convertInHundred(ItemSlide) * -1;
          ItemSlide.forEach((item, i) => {
            item.style.transform = `translateX(${value}%)`;
          });
        }
      };


  return (
    <Container className={`item_${item_key}`}>
        <div className="slide" id={`slide${item_key}`}>
            <div className="bar_left">
                <span className="icons" onClick={() => handleLeftSlide(item_key)}>
                <FaAngleLeft />
                </span>
            </div>
            <div className="bar_right">
                <span className="icons" onClick={() => handleRightSlide(item_key)}>
                <FaAngleRight />
                </span>
            </div>
            <div className="slide_img">

                {items.photo.map((p) => (
                <img src={p} alt="" className="images" />
                ))}

            </div>
            <div className="slide_text">{items.description}</div>
        </div>
    </Container>
  )
}

const Container = styled.div`

div.slide{
    background-color: #700b0b;
    position: relative;
    color: white;
}


div.slide .slide_img{

    width: 345px;
    height: 300px;
    display: flex;
    overflow: hidden;
    margin:auto;
}
div.slide .slide_img .images{
    position: relative;
    width: 100%;
    height: 100%;
    transition: .5s ease;
    background-color: red;
}

div.slide .bar_left{
    position: absolute;
    top: 0;
    display: inline;
    background-color: gray;
    height: 100%;
    z-index: 99;
    width: 30px;
    opacity: .6;

    &:hover{
        opacity: 1;
    }
}
div.slide .bar_right{
    position: absolute;
    top: 0;
    right: 0;
    display: inline;
    background-color: gray;
    height: 100%;
    z-index: 99;
    width: 30px;
    opacity: .6;

    &:hover{
        opacity: 1;
    }
}
div.slide .bar_left span,div.slide .bar_right span{
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
div.slide .bar_left span svg,div.slide .bar_right span svg{
    font-size: x-large;
}

.slide_text{
    text-align: center;
}
`;

export default SliderMedia