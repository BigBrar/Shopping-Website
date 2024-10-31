import {useState} from 'react'
import logoImg from './assets/logo.jpg'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './index.module.css'
import cardImage1 from './assets/card1Image.jpg'
import cardImage2 from './assets/card2Image.jpeg'
import cardImage3 from './assets/card4Image.jpg'
import Navbar from './components/navbar/Navbar'
import ImageCarousel from './components/beautifulAnimaiton/ImageCarousel'
import ImageSlides from './components/section1/ImageSlides';


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

    <div className={styles.cards}>
      <motion.div 
      initial={{y:200, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.7, ease: [0.32, 0.42, 0.62, 1]}}
      viewport={{once:true}}
      whileHover={{y:-10}}
      className={styles.cardItem}>
        <img src={cardImage1}/>
        <div className={styles.cardInfo}>
          <h2 className={styles.shopTitle}>Title</h2>
          <button className={styles.shopButton}>Shop now</button>
        </div>
      </motion.div>
      <motion.div 
      initial={{y:200, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.7, ease: [0.32, 0.42, 0.62, 1]}}
      viewport={{once:true}}
      whileHover={{y:-10}}
      className={styles.cardItem}>
        <img src={cardImage2}/>
        <div className={styles.cardInfo}>
          <h2 className={styles.shopTitle}>Title</h2>
          <button className={styles.shopButton}>Shop now</button>
        </div>
      </motion.div>
      <motion.div 
      initial={{y:200, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.7, ease: [0.32, 0.42, 0.62, 1]}}
      viewport={{once:true}}
      whileHover={{y:-10}}
      className={styles.cardItem}>
        <img src={cardImage3}/>
        <div className={styles.cardInfo}>
          <h2 className={styles.shopTitle}>Title</h2>
          <button className={styles.shopButton}>Shop now</button>
        </div>
      </motion.div>
    </div>
    </>
  );
}

export default App;
