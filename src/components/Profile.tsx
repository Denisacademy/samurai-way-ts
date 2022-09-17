import React from "react";
import styles from './Profile.module.css'
const Profile = () => {
    return (
        <>
            <div className={styles.content}>
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
                <div className={styles.userPanel}>
                    <form action="">
                        <h2>My posts</h2>
                        <input type="text" placeholder='your news...'/>
                        <div>
                            <button className={styles.btn} type='submit'>Send</button>
                        </div>
                    </form>
                    <div className={styles.userMessage}>
                        <h3>Hey, why nobody loves me?</h3>
                    </div>
                    <div className={styles.userMessage}>
                        <h3>Are you really interested in React?</h3>
                    </div>
                    <div className={styles.userMessage}>
                        <h3>Do you think it is time to learn JS?</h3>
                    </div>
                    <div className={styles.userMessage}>
                        <h3>It is difficult to you develop site, isn`t?</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile