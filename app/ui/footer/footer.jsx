import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer} id='footer'>
            <div className={styles.generalContainer}>
                <div className={styles.content3}>
                    <p className={styles.title}>Contáctanos:</p>
                    <p className={styles.email}>aymara12vargas@gmail.com</p>
                    <p className={styles.email}>karinespinola2004@gmail.com</p>
                    <p className={styles.email}>nicolastedesco05@gmail.com</p>
                    <p className={styles.email}>juandeangelis2004@gmail.com</p>    
                </div>
                <div className={styles.content2}>
                    <p className={styles.text}>Nuestro email:</p>
                    <p className={styles.text}>cnc.tecnica1.23@gmail.com</p>
                </div>
                <div className={styles.content1}>
                    <p className={styles.text}>CNC EXPERT © 2023</p>
                    <p className={styles.text}>Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}