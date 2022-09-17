import React from "react";

import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <>
            <div className='content'>
                <div className={styles.bg}></div>
                <div className={styles.userInfo}>
                    <img className={styles.avatar} src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt=""/>
                    <div>
                        <h2>Artem P.</h2>
                        <p>Date of Birth: 3 January</p>
                        <p>City: Universe</p>
                        <p>Education: Bsu 11</p>
                        Web Site https://it-incubator.com
                    </div>
                </div>
                <MyPosts/>
            </div>
        </>
    )
}

export default Profile