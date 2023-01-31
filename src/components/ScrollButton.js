import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Button = styled.div`
position: fixed; 
   right: 0;
   bottom: 20%;
   height: 10px;
   font-size: 3rem;
   margin: 40px;
   z-index: 3;
   opacity: 0.5;
   transition: 0.5s ease-in all;
   color: #91cac1;
   cursor: pointer;
   ${mobile({bottom: "10%", margin: "30px", fontSize: "2rem"})};
`
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default ScrollButton;