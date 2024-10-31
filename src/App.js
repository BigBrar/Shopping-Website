import {useState} from 'react'
import logoImg from './assets/logo.jpg'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './index.module.css'
import Navbar from './components/navbar/Navbar'
import ImageCarousel from './components/beautifulAnimaiton/ImageCarousel'
import ImageSlides from './components/section1/ImageSlides';
import Cards from './components/section2/Cards';


function App() {
  
  return (
    <>
    <Navbar styles={styles} logoImg={logoImg}/>
    {/* <div className={styles.suitImagesDiv}>
      <button onClick={previousPicture}>Previous</button>
      <motion.img
      key={currentSuit}
      initial={{ opacity: 0, scale:0.7 }}
      animate={{ opacity: 1,scale:1 }}
      exit={{ opacity: 0,scale:0.7 }}
      transition={{ duration: 0.5 }}
      className={styles.suitImage} src={suits[currentSuit]}/>
      <button onClick={nextPicture}>Next</button>
    </div> */}
    {/* <ImageCarousel/> */}
    {/* <div className={styles.testDiv}>
      {suits.map((image)=>{
        return <img key={image} src={image} className={styles.suitImages}/>
      })}
    </div> */}

    <ImageSlides/>

    <Cards/>
    
    </>
  );
}

export default App;
