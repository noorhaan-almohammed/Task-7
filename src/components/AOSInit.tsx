'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
      easing: 'ease-in-out',
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 500);
  }, []);

  return null;
};

export default AOSInit;
