import React, { useState } from 'react'
import { useTheme } from '../../context/themeContext';
import styled from 'styled-components';
import { handleSelect } from '../../utils/FunctionsComponent';

const CardsMedia = ({item, setSelect, setModal}) => {

  // Generate color for background
  const [backColor, setBackColor] = useState("rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");

  // Generate image API
  let source = 
  
  const theme = useTheme()


  return (

    <CardItem onClick={() => handleSelect(setSelect, setModal, item)} theme={theme}>
        <CardHeader>
          <img src={source} alt='media'/>
        </CardHeader>

        <CardBody theme={theme}>

        <div className='boxTitle'>
          <img src={item.image} alt='icon media'/>
          <h3>{item.title}</h3>
        </div>

        <ul>
          {
            item.secteurs.map((secteur,  index) => (
              <li key={index} title='Secteurs' style={{backgroundColor: `${backColor}`}}>{secteur}</li>
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
width: 360px;
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
  font-family: 'Inter', sans-serif;
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