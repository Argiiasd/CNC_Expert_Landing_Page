import React from 'react';
import students_info from './students_info';
import Card from '../card/card';
import styles from './students.module.css';

export default function Students() {
    return (
        <div className={styles.studentsContainer}>
            <div className={styles.generalContainer}>
                <h2 className={styles.title}>Quienes somos</h2>
                <p className={styles.text}>Somos un grupo de estudiantes de la EEST N1 de Merlo (Bs As), el cual está desarrollando <br/> una máquina para el diseño y armado de circuitos impresos.</p>
                <div className={styles.cardsContainer}>
                    {Object.keys(students_info).map((key) => {
                        return (
                            <Card
                                key={key}
                                imagen={students_info[key].imagen}
                                nombre={students_info[key].nombre}
                                cargo={students_info[key].cargo}
                            />
                        )
                    })}    
                </div>
                
            </div>

            <div className={styles.divider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </div>
    )
}