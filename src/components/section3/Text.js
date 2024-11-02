import Image3 from '../../assets/section3Image1.png'
import Image2 from '../../assets/section3Image2.png'
import Image1 from '../../assets/section3Image3.png'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './text.module.css'

export default function Text(){
    return(
        <>
        <AnimatePresence>
        <div className={styles.container}>
            <motion.div 
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1, ease: [0.32, 0.42, 0.62, 1]}}
            viewport={{once: true}}
            className={styles.containerItem}>
                <div className={styles.imageDiv}>
                <img className={styles.containerImage} src={Image1} alt='sample image'/>
                </div>
                <h2>Crafted with Love</h2>
                <p>Nestled in the vibrant city of Surrey, British Columbia, our creations reflect the rich tapestry of Indian culture while being lovingly handcrafted right here in our Canadian atelier.</p>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.4, ease: [0.32, 0.42, 0.62, 1]}}
            viewport={{once: true}}
            className={styles.containerItem}>
            <div className={styles.imageDiv}>
                <img style={{width:'150px'}} className={styles.containerImage} src={Image2} alt='sample image'/>
                </div>
                <h2>Crafted with Love</h2>
                <p>Nestled in the vibrant city of Surrey, British Columbia, our creations reflect the rich tapestry of Indian culture while being lovingly handcrafted right here in our Canadian atelier.</p>
            </motion.div>
            <motion.div 
            initial={{ x:100,opacity: 0}}
            whileInView={{x:0,opacity: 1}}
            transition={{duration: 1, ease: [0.32, 0.42, 0.62, 1]}}
            viewport={{once: true}}
            className={styles.containerItem}>
            <div className={styles.imageDiv}>
                <img className={styles.containerImage} src={Image3} alt='sample image'/>
                </div>
                <h2>Crafted with Love</h2>
                <p>Nestled in the vibrant city of Surrey, British Columbia, our creations reflect the rich tapestry of Indian culture while being lovingly handcrafted right here in our Canadian atelier.</p>
            </motion.div>
        </div>
        </AnimatePresence>
        </>
    )
}