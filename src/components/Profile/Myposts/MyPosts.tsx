import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = () => {
    return (
        <>
            <div className={styles.myPosts}>
                <form action="src/components/Profile/Profile">
                    <h2>My posts</h2>
                    <input type="text" placeholder='your news...'/>
                    <div>
                        <button className={styles.btn} type='submit'>Send</button>
                    </div>
                </form>
                <Post/>
                <Post/>
            </div>
        </>
    )
}

export default MyPosts

