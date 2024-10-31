import {useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import suit1 from '../../assets/suit1.webp'
import suit2 from '../../assets/suit2.webp'
import suit3 from '../../assets/suit3.webp'
import suit4 from '../../assets/suit4.webp'
import suit5 from '../../assets/suit5.webp'
import styles from './imageslides.module.css'

export default function ImageSlides(){
    const suits = [suit1, suit2, suit3, suit4, suit5];
  const [currentSuit, setcurrentSuit] = useState(0);

  const nextPicture = ()=>{
    setcurrentSuit((prevSuit)=>{
      return prevSuit+1
    }
  )
  }
  const previousPicture = ()=>{
    setcurrentSuit((prevSuit)=>{
      return prevSuit-1
    }
  )
  }
    return (
        <div className={styles.carouselContainer}>
        <motion.div 
        animate={{x:`-${currentSuit*100}%`}}
        transition={{duration:0.7, ease: [0.32, 0.72, 0, 1]}}
        // transition={{duration:'2s'}}
        className={styles.carouselTrack}>
        {suits.map((image, index) => (
            <div key={index} className={styles.slideWrapper}>
            <motion.img 
            // whileHover={{scale:1.02}}
            // transition={{duration:0.7}}
                src={image} 
                alt={`Slide ${index + 1}`}
                className={styles.slideImage}
            />
            </div>
        ))}
        </motion.div>
        <AnimatePresence>
        { currentSuit > 0 &&
        <motion.button 
        initial={{opacity:0}}
        animate={{opacity:0.7}}
        exit={{opacity:0}}
        whileHover={{opacity:1}}
        onClick={previousPicture} className={styles.previousButton}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0c0c0d"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
        </motion.button>}
        </AnimatePresence>
        <AnimatePresence>
        {currentSuit < 4 &&
        <motion.button 
        initial={{opacity:0}}
        animate={{opacity:0.7}}
        exit={{opacity:0}}
        whileHover={{opacity:1}}
        onClick={nextPicture} className={styles.nextButton}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0c0c0d"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </motion.button>}

        <AnimatePresence mode='wait'>
        <motion.div 
        initial={{opacity:0, scale:0.8}}
        animate={{opacity:0.95,scale:1}}
        exit={{opacity:0,scale:0.8}}
        transition={{duration:0.3}}
        key={currentSuit}
        className={styles.shopNowDiv}>
        <h2 className={styles.shopTitle}>Title</h2>
        <button className={styles.shopButton}>Shop now</button>
        </motion.div>
        </AnimatePresence>
        </AnimatePresence>
        </div>



)
}