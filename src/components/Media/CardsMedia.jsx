import React, { useState } from 'react'
import { useTheme } from '../../context/themeContext';
import styled from 'styled-components';
import { handleSelect } from '../../utils/FunctionsComponent';

const CardsMedia = ({item, setSelect, setModal}) => {

  const [backColor, setBackColor] = useState(["#406880", "#978840", "#975450", "#636769", "#88456c", "#61534d"])
  const theme = useTheme()

  return (

    <CardItem onClick={() => handleSelect(setSelect, setModal, item)} theme={theme}>
        <CardHeader>
          <img src={item.image2} alt='media'/>
        </CardHeader>

        <CardBody theme={theme}>

        <div className='boxTitle'>
          <img src={item.image} alt='icon media'/>
          <h3>{item.title}</h3>
        </div>

        <ul>
          {
            item.secteurs.map((secteur,  index) => (
              <li key={index} title='Secteurs' style={{backgroundColor: backColor[Math.floor(Math.random() * backColor.length)]}}>{secteur}</li>
            ))
          }
        </ul>
        
        </CardBody>
    </CardItem>

  )
}

// Style CSS

const CardItem = styled.div`
margin: 10px;
border-radius: 10px;
box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
overflow: hidden;
width: 320px;
height: auto;
cursor: pointer;
background-color: ${props => props.theme.body};

&:hover{
  transition: transform 0.2s ease-in-out;
  transform: scale(1.05);
}

`;

const CardBody = styled.div`

padding: 10px;

h3{
  font-style: normal;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: ${props => props.theme.colorBheti};
  line-height: 18px;
  margin-bottom: 13px;
}

ul{
  display: flex;
  list-style:none;
  font-size: 12px;
  padding:0;
}

ul li {
  font-family: 'Montserrat', sans-serif;
  margin-right:8px;
  margin-top: 4px;
  color: white;
  border-radius: 6px;
  padding:2px 9px;
}

.boxTitle{
  display: flex;
  img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
    object-fit: cover;
  }
}

`;

const CardHeader = styled.div`

img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

`;

export default CardsMedia