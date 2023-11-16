'use client'
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './navBar.module.css'; Link

const NavBar = () => {
    const [sideNavVisible, setSideNavVisible] = useState(false);

    const openNav = () => {
        setSideNavVisible(true);
    };

    const closeNav = () => {
        setSideNavVisible(false);
    };

    return (
        <nav className={styles.presentationNav}>
            <h2 className={styles.title}>CNC EXPERT</h2>
            <div className={styles.buttonsContainer}>
                <Link to="quienes_somos"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} className={styles.button + ' ' + styles.secondaryButton}>Quienes somos</Link>
                <Link to="test1"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500} className={styles.button + ' ' + styles.contactButton}>Contáctanos</Link>
                <Link to="test1"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500} onClick={openNav} className={styles.iconButton}><span ><MenuIcon sx={{ fontSize: 40 }} /></span></Link>
            </div>

            {sideNavVisible && (
                <nav className={styles.presentationSideNav}>
                    <h2 className={styles.titleSide}>CNC EXPERT</h2>
                    <div className={styles.buttonsContainerSide}>
                        <Link to="quienes_somos"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500} className={styles.buttonSide + ' ' + styles.secondaryButton} onClick={closeNav}>Quienes somos</Link>
                        <Link to="test1"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} className={styles.buttonSide + ' ' + styles.contactButton} onClick={closeNav}>Contáctanos</Link>
                        <Link to="test1"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} onClick={closeNav} className={styles.iconButton2}><span><CloseIcon sx={{ fontSize: 30 }} /></span></Link>
                    </div>
                </nav>
            )}
        </nav>
    );
};

export default NavBar;