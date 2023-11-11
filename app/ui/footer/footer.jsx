import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.generalContainer}>
                <div className={styles.content1}>
                    <p className={styles.text}>CNC EXPERT © 2023</p>
                    <p className={styles.text}>Todos los derechos reservados.</p>
                </div>
                <div className={styles.content2}>
                    <div>
                        <p className={styles.text}>Nuestro email:</p>
                        <p className={styles.text}>kLqzF@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}