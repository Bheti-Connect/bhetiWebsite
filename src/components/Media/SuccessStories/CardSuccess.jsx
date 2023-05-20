import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../../context/themeContext';

const CardSuccess = ({item, setSelect, setModal}) => {


  // random image API :  https://random.imagecdn.app/500/150

  const theme = useTheme();

   // Generate image
   let source = "https://" + `picsum.photos/id/${Math.floor(Math.random() * 200)}/200/300`;
 
 
   const handleSelect = () => {
     const body = document.querySelector("body");
     body.style.overflow = "hidden";
     setSelect(item);
     setModal(true);
   }


  return (
    <Container onClick={handleSelect} theme={theme}>


          <CardHeader>
            <img src={item.photo} alt='project'/>
          </CardHeader>

          <CardBody>

          <h3>{item.name}</h3>
          <ul>
            <li>{item.secteur}</li>
            <li>{item.type}</li>
            <li>{item.pays}</li>
          </ul>

         

        </CardBody>


    </Container>
  )
}

// Style CSS

const Container = styled.div`
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

ul{
  display: flex;
  justify-content: left;
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
  /* tronque text  */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

export default CardSuccess