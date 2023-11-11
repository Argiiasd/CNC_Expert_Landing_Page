import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>CNC Expert © 2022. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}