import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/themeContext';
import LogoBheti from '../../../assets/images/bheti_white_logo.png';


const FormInvestisseur = () => {

  const theme = useTheme()

  // handle disable modal
  const removeModal = () => {
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  useEffect(() => {
    removeModal()
  },[])

  return (
    <Container>

      <Left theme={theme}>
        
        <div className='text-left'>
          <img src={LogoBheti} alt='Logo bheti connect' />
          <p>Accédez à des opportunités d'investissement exclusives</p>
          <button type='button'>Envoyer</button>
        </div>
      </Left>

      <Right>
      <form action="#">
        <div className="title">
          <h2>Register here</h2>
        </div>
        <div className="info">
          <input className="fname" type="text" name="name" placeholder="Full name"/>
          <input type="text" name="name" placeholder="Email"/>
          <input type="text" name="name" placeholder="Phone number"/>
          <input type="password" name="name" placeholder="Password"/>
          <select>
            <option value="course-type" selected>Course type*</option>
            <option value="short-courses">Short courses</option>
            <option value="featured-courses">Featured courses</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="diploma">Diploma</option>
            <option value="certificate">Certificate</option>
            <option value="masters-degree">Masters degree</option>
            <option value="postgraduate">Postgraduate</option>
          </select>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="checkbox"/><span>I agree to the <a href="#">Privacy Poalicy for W3Docs.</a></span>
        </div>
        <button type="submit" >Submit</button>
      </form>
      </Right>

    </Container>
  )
}


// Style CSS
const Container = styled.div`

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 40px 0;
      

`;

const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
border-radius: 10px 0 0 10px;
height: 950px;
width: 35%;
background-color: ${props => props.theme.colorBheti};
box-shadow: -5px 0px 10px 1px rgba(128, 128, 128, 0.419);



.text-left {
  

  img {
    width: 50%;
    height: 100px;
    object-fit: cover;
  }

  p{
    color: white;
    width: 450px;
    margin: 30px;
  }

  button {
    position: relative;
    color:  ${props => props.theme.colorBheti};
    background-color: white;
    padding: 7px 20px;
    border-radius: 10px;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    right: -100px;
    cursor: pointer;
  }



}

`;

const Right = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 0 10px 10px 0;
height: 950px;
width: 35%;
box-shadow: 3px 0px 10px 1px rgba(128, 128, 128, 0.419);

.title{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.info {
display: flex;
flex-direction: column;
}

input, select {
padding: 5px;
margin-bottom: 30px;
background: transparent;
border: none;
border-bottom: 1px solid #eee;
}

`;



export default FormInvestisseur