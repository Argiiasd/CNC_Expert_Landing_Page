'use client'
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './navBar.module.css';

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
          <button className={styles.button + ' ' + styles.secondaryButton}>Quienes somos</button>
          <button className={styles.button + ' ' + styles.secondaryButton}>Donde estamos</button>
          <button className={styles.button + ' ' + styles.contactButton}>Contáctanos</button>
          <button onClick={openNav} className={styles.icon}><span ><MenuIcon /></span></button>
        </div>
  
        {sideNavVisible && ( // Render the sideNav only when it's visible
          <nav className={styles.presentationSideNav}>
            <h2 className={styles.titleSide}>CNC EXPERT</h2>
            <div className={styles.buttonsContainerSide}>
              <button className={styles.buttonSide + ' ' + styles.secondaryButton}>Quienes somos</button>
              <button className={styles.buttonSide + ' ' + styles.secondaryButton}>Donde estamos</button>
              <button className={styles.buttonSide + ' ' + styles.contactButton}>Contáctanos</button>
              <button onClick={closeNav} className={styles.icon}><span><CloseIcon /></span></button>
            </div>
          </nav>
        )}
      </nav>
    );
  };

  export default NavBar