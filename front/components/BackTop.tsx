import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react'

// import './style.css';

const BackTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };
  
    return (
      <>
        <div className="container">
          <div className="box box--1"></div>
          <div className="box box--2"></div>
          <div className="box box--3"></div>
          <div className="box box--4"></div>
          <div className="box box--5"></div>
        </div>
  
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">            
            <IconButton aria-label='scroll-top' icon={<FaArrowUp size={30} color='white' />} onClick={scrollToTop} 
               bg="gray.500" _hover={{ bg: 'gray.600', cursor: 'pointer' }} position='fixed' right='20px' bottom='20px'  />
          </button>
        )}
      </>
    );
}

export default BackTop;