import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './presentation.module.css';

export default function SideNav() {
    return (
        <nav className={styles.presentationSideNav}>
            <h2 className={styles.titleSide}>CNC EXPERT</h2>
            <div className={styles.buttonsContainerSide}>
                <button><span className={styles.icon}><CloseIcon /></span></button>
                <button className={styles.buttonSide + ' ' + styles.secondaryButton}>Quienes somos</button>
                <button className={styles.buttonSide + ' ' + styles.secondaryButton}>Donde estamos</button>
                <button className={styles.buttonSide + ' ' + styles.contactButton}>Contáctanos</button>
            </div>
        </nav>
    )
}
