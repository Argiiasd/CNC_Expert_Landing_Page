import React from 'react';
import Image from 'next/image';
import styles from './card.module.css';

export default function Card({ imagen, nombre, cargo }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={imagen} alt={nombre} className={styles.image} />    
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{nombre}</h3>
                <p className={styles.text}>{cargo}</p>
            </div>
        </div>
    )
}