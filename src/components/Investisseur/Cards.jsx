import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';

const Cards = ({item, setSelect, setModal}) => {
  const theme = useTheme()

  // Format currency Euro
  let currencyEuro = new Intl.NumberFormat('de-DE', { style : 'currency', currency: 'EUR'})

  // Generate image
  let source = "https://" + `picsum.photos/id/${item.id}/200/300`;

  const handleSelect = () => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    setSelect(item)
    setModal(true)
  }

  return (
    <CardItem onClick={handleSelect} theme={theme}>
          <CardHeader>
            <img src={source} alt='project'/>
          </CardHeader>

          <CardBody>
          <h3>{item.nom}</h3>
          <ul>
            <li>{item.stade}</li>
            <li>Automobile</li>
          </ul>
          <div className='boxPriceCountry'>
            <p className='price'>{item.financement ? (currencyEuro.format(parseInt(item.financement))) : ("ne pas mentionné")}</p>
            <p className='country'>{item.siege}</p>
          </div>
          </CardBody>
    </CardItem>
  )
}


const CardItem = styled.div`

margin: 10px;
border-radius: 10px;
box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
overflow: hidden;
width: 250px;
height: 330px;
cursor: pointer;

&:hover{
  transition: transform 0.2s ease-in-out;
  transform: scale(1.05);
  
}
`
const CardBody = styled.div`
padding: 10px;

h3{
  text-transform: uppercase;
  font-style: normal;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 13px;
}

ul{
  display: flex;
  list-style:none;
  font-size: 12px;
  margin-top: 10px;
  padding:0;
}

ul li {
  margin-right:8px;
  background-color: #700b0b;
  color: white;
  border-radius: 40px;
  padding:2px 5px;
}

.boxPriceCountry{
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  margin-top: 8px;
}

.country {
  border-radius: 50px;
  color: white;
  background-color: #000000;
  padding: 2px 5px;
  margin-top: 8px;
  text-align:center;
  font-size: 12px;
}

.price{
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
}

`

const CardHeader = styled.div`

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

`

export default Cards