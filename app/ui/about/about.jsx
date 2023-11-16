import React from 'react';
import Image from 'next/image';
import modelo1 from '../../../public/modelo1.jpeg';
import modelo2 from '../../../public/modelo2.jpeg';
import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.aboutContainer} id='proyecto'>
            <div className={styles.generalContainer}>
                <div className={styles.generalTitleContainer}>
                    <h2 className={styles.generalTitle}>CNC EXPERT</h2>
                    <p className={styles.text}>Impulsamos la innovación en la fabricación de PCBs con nuestros CNC routers. Haz realidad tus proyectos electrónicos con el toque innovador que ofrecemos.</p>    
                </div>

                <div className={styles.content1Container}>
                    <div className={styles.imageContainer}><Image src={modelo1} alt="modelo1" className={styles.image} /></div>
                    <div className={styles.content}>
                        <h2 className={styles.contentTitle}>Comodidad</h2>
                        <p className={styles.contentText}>Tu socio ideal tanto en el hogar como en la empresa. Desde la intimidad de tu espacio creativo hasta la producción, nuestra tecnología da a tus proyectos con precisión milimétrica. Convierte tu casa en un laboratorio de innovación o potencia tu empresa con eficiencia y personalización.</p>
                    </div>
                </div>

                <div className={styles.content2Container}>
                    <div className={styles.imageContainer}><Image src={modelo2} alt="modelo2" className={styles.image} /></div>
                    <div className={styles.content}>
                        <h2 className={styles.contentTitle}>Innovación</h2>
                        <p className={styles.contentText}>La clave está en nuestro porta PCB integrado, una característica exclusiva que simplifica y acelera el proceso. No solo creamos pistas con precisión, sino que también perforamos con eficiencia. En un solo paso, nuestra máquina se convierte en tu aliada perfecta para hacer que el proceso de fabricación de placas sea más fácil y rápido que nunca. La innovación está en nuestras manos, permitiéndote esculpir tus ideas con la máxima eficacia.</p>
                    </div>
                </div>
            </div>

            <div className={styles.divider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </div>
    )
}