import React, { useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
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


    useEffect(() => {
      const time = Math.floor(Math.random() * (10 - 5) + 5) * 1000
      const interval = setInterval(() => {
        handleRightSlide(item_key)
      }, time);
      return () => clearInterval(interval);
    }, []);


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
            <div className='container_slide'>
              <div className="slide_img">

              {items.photo.map((item, index) => (
                  <img key={index} src={item} alt="" className="images" />
              ))}

              </div>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`

div.slide{
    background-color: rgb(25, 25, 25);
    position: relative;
    color: white;
    margin: 10px;
    width: 650px;
    padding-top:10px;
    padding-bottom:10px;
}

.container_slide{
  background: #700b0b;
  width: 80%;
  margin: auto;
  border-radius: 10px;
}


div.slide .slide_img{

    width: 390px;
    height: 290px;
    display: flex;
    overflow: hidden;
    margin:auto;
    
}
div.slide .slide_img .images{
    position: relative;
    width: 100%;
    height: 90%;
    transition: .5s ease;
    margin: auto;
    object-fit: cover;
}

div.slide .bar_left{
    position: absolute;
    top: 0;
    display: inline;
    cursor: pointer;
    height: 100%;
    z-index: 99;
    width: 40px;
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
    cursor: pointer;
    height: 100%;
    z-index: 99;
    width: 40px;
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



@media only screen and (max-width: 900px) {
  div.slide{
    width: 550px;
    }

    div.slide .slide_img{
    width: 290px;
    height: 220px;
    }

}


@media only screen and (max-width: 768px) {
  div.slide{
    width: 450px;
  }

  div.slide .slide_img{
    width: 250px;
    height: 200px;
  }
}


@media only screen and (max-width: 578px) {

}

/*
@media only screen and (max-width: 508px) {


}


@media only screen and (max-width: 428px) {

}

@media only screen and (max-width: 415px) {

}

*/
`;

export default SliderMedia