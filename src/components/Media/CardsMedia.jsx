import React from 'react'
import { useTheme } from '../../context/themeContext';
import styled from 'styled-components';

const CardsMedia = ({item, setSelect}) => {

  const theme = useTheme()


   // Generate image
   let source = "https://" + `picsum.photos/id/${item.id}/200/300`;

   const handleSelect = () => {
     const body = document.querySelector("body");
     body.style.overflow = "hidden";
     setSelect(item)
     //setModal(true)
   }


  return (

    <CardItem onClick={handleSelect} theme={theme}>
        <CardHeader>
          <img src={source} alt='media'/>
        </CardHeader>

        <CardBody theme={theme}>
        <h3>{item.poste}</h3>

        <ul>
          <li>{item.secteur}</li>
          <li>{item.pays}</li>
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
height: 330px;
cursor: pointer;
background-color: ${props => props.theme.colorBheti};

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
  color:white;
  line-height: 18px;
  margin-bottom: 13px;
}

ul{
  display: flex;
  justify-content: space-around;
  list-style:none;
  font-size: 12px;
  margin-top: 40px;
  padding:0;
}

ul li {
  margin-right:8px;
  background-color: white;
  color: ${props => props.theme.colorBheti};
  border-radius: 10px;
  padding:5px 5px;
  font-family: 'Inter', sans-serif;
  font-weight:600;
}

`;

const CardHeader = styled.div`

img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
}

`;

export default CardsMedia