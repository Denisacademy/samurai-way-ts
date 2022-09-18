import React from "react";

import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <>
            <div className='content'>
                <div className={styles.bg}></div>
                <div className={styles.userInfo}>
                    <img className={styles.avatar} src="https://assets.entrepreneur.com/content/3x2/2000/1651673015-shutterstock-2098527055.jpg?auto=webp&quality=95&crop=16:9&width=675" alt=""/>
                    <div>
                        <h2>Jonny M.</h2>
                        <p>Date of Birth: 3 January</p>
                        <p>City: Universe</p>
                        <p>Education: PHD</p>
                        Web Site https://it-developing.com
                    </div>
                </div>
                <MyPosts/>
            </div>
        </>
    )
}

export default Profile