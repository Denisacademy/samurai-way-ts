import React from "react";
import styles from './Nav.module.css'
const Nav = () => {
    return (
        <>
            <nav className={styles.nav}>
               <a href="#" className={`${styles.nav} ${styles.active}`}>Profile</a>
               <a href="#">Messages</a>
               <a href="#">News</a>
               <a href="#">Music</a>
               <a href="#">Settings</a>
            </nav>
        </>
    )
}

export default Nav