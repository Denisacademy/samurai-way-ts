import React from "react";
import styles from './Nav.module.css'
const Nav = () => {
    return (
        <>
            <nav className='nav'>
               <a href="src/components/Nav/Nav#" className={`${styles.nav} ${styles.active}`}>Profile</a>
               <a href="src/components/Nav/Nav#">Messages</a>
               <a href="src/components/Nav/Nav#">News</a>
               <a href="src/components/Nav/Nav#">Music</a>
               <a href="src/components/Nav/Nav#">Settings</a>
            </nav>
        </>
    )
}

export default Nav