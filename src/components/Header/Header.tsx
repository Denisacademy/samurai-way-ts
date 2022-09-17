import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <img className={styles.logo}
                     src="https://miro.medium.com/max/700/1*EaB5rd8ml5HL1KXFWkNeiA.png"
                     alt=""/>
            </header>
        </>
    )
}

export default Header
