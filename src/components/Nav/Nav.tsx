import React from "react";
import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    const activeClass  = `${styles.nav} ${styles.active}`
    return (
        <>
            <nav className='nav'>
                <NavLink to="/profile" activeClassName={activeClass} >Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={activeClass}>Messages</NavLink>
                <NavLink to="/news" activeClassName={activeClass}>News</NavLink>
                <NavLink to="/music" activeClassName={activeClass}>Music</NavLink>
                <NavLink to="/settings" activeClassName={activeClass}>Settings</NavLink>
                <NavLink to="/users" activeClassName={activeClass}>Users</NavLink>
            </nav>
        </>
    )
}

export default Nav