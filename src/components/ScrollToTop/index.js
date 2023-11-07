import React, {useState} from 'react'; 
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import Box from '@mui/material/Box';

function ScrollToTop() {
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
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 

  return ( 
    <Box sx={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: "1",
      cursor: "pointer",
      color: "#7BD8C0",
    }}> 
      <ArrowCircleUpSharpIcon 
        onClick={scrollToTop}  
        style={{display: visible ? 'inline' : 'none'}} 
        sx={{ fontSize: 50}}
      /> 
    </Box> 
  ); 
}

export default ScrollToTop;