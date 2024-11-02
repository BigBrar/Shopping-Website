import {useState} from 'react'
import logoImg from './assets/logo.jpg'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './index.module.css'
import Navbar from './components/navbar/Navbar'
import ImageCarousel from './components/beautifulAnimaiton/ImageCarousel'
import ImageSlides from './components/section1/ImageSlides';
import Cards from './components/section2/Cards';
import Text from './components/section3/Text';


function App() {
  
  return (
    <>
    <Navbar styles={styles} logoImg={logoImg}/>

    <ImageSlides/>

    <Cards/>

    <Text/>
    
    </>
  );
}

export default App;
