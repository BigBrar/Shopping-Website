import cardImage1 from '../../assets/card1Image.jpg'
import cardImage2 from '../../assets/card2Image.jpeg'
import cardImage3 from '../../assets/card4Image.jpg'
import styles from './cards.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Custom hook for center detection
const useIsInCenter = (ref, threshold = 0.7) => {
    const [isInCenter, setIsInCenter] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInCenter(entry.isIntersecting && entry.intersectionRatio >= threshold);
            },
            {
                threshold: threshold,
                rootMargin: "-20% 0px"
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return isInCenter;
};

// Card component
const Card = ({ image, initialY, isMobile }) => {
    const cardRef = useRef(null);
    const isInCenter = useIsInCenter(cardRef);

    return (
        <motion.div 
            ref={cardRef}
            initial={{y: initialY, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.7, ease: [0.32, 0.42, 0.62, 1]}}
            viewport={{once: true}}
            className={styles.cardItem}
        >
            <motion.img 
                src={image}
                whileHover={!isMobile ? {scale: 1.1} : {}}
                animate={isMobile && isInCenter ? {scale: 1.1} : {scale: 1}}
                transition={{duration: 0.3}}
            />
            <div className={styles.cardInfo}>
                <h2 className={styles.shopTitle}>Title</h2>
                <button className={styles.shopButton}>Shop now</button>
            </div>
        </motion.div>
    );
};

export default function Cards() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 753);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const cardsData = [
        { image: cardImage1, initialY: 100 },
        { image: cardImage2, initialY: 150 },
        { image: cardImage3, initialY: 200 }
    ];

    return (
        <div className={styles.cards}>
            {cardsData.map((card, index) => (
                <Card 
                    key={index}
                    image={card.image}
                    initialY={card.initialY}
                    isMobile={isMobile}
                />
            ))}
        </div>
    );
}