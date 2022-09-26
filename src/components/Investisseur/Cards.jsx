import React from 'react';
import styled from 'styled-components';


const Cards = ({number}) => {

    let link = "https://" + `picsum.photos/id/${number}/200/300`;

  return (
    <CardItem>
          <CardHeader>
            <img src={link} alt='project'/>
          </CardHeader>

          <CardBody>
          <h3>Project {number}</h3>
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
}

ul{
  display: flex;
  list-style:none;
  font-size: 13px;
  margin: 5px;
  padding:0;
}

ul li {
  margin-right:8px;
  background-color: blue;
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
  width: 30%;
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