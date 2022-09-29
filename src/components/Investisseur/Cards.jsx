import React from 'react';
import styled from 'styled-components';


const Cards = ({item, setSelect}) => {

  let source = "https://" + `picsum.photos/id/${item}/200/300`;

  const handleSelect = () => {
    console.log(item)
  }

  return (
    <CardItem onClick={handleSelect}>
          <CardHeader>
            <img src={source} alt='project'/>
          </CardHeader>

          <CardBody>
          <h3>Project {item}</h3>
          <ul>
            <li>Mobility</li>
            <li>Automobile</li>
          </ul>
          <div>
            <p className='price'>&euro; 2 000,000</p>
            <p className='country'>France</p>
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
width:250px;
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
  font-family: georgia, serif;
  font-size: 16px;
}

ul{
  display: flex;
  list-style:none;
  font-size: 12px;
  margin: 5px;
  padding:0;
}

ul li {
  margin-right:8px;
  background-color: #002B5B;
  color: white;
  border-radius: 40px;
  padding:2px 5px;
}

.country {
  border-radius: 50px;
  color: white;
  background-color: #47bcd4;
  padding: 2px 0;
  margin-top: 3px;
  text-align:center;
  font-size: 12px;
  width: 30%;
}

.price{
  font-size: 13px;
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