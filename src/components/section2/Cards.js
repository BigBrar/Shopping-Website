import cardImage1 from '../../assets/card1Image.jpg'
import cardImage2 from '../../assets/card2Image.jpeg'
import cardImage3 from '../../assets/card4Image.jpg'
import styles from './cards.module.css'
import { AnimatePresence, motion } from 'framer-motion';

export default function Cards(){
    return (
        <div className={styles.cards}>
      <motion.div 
      initial={{y:100, opacity:0}}
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
      initial={{y:150, opacity:0}}
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
    )
}