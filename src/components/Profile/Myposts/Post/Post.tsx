import styles from "./Post.module.css";
import React from "react";
import {PostsType} from "../../../../redux/profile-reducer";



const time = new Date().getHours() + ':' + new Date().getMinutes()

const Post = (props: PostsType) => {

    return (
        <>
            <div className={styles.userMessage}>
                <h3 style={{color: props.color}}>
                    <span style={{background: props.status}} className={styles.status}></span>
                    {props.name}
                </h3>
                <p>{props.message}</p>
                <span className={styles.time}>{props.time}</span>
            </div>
        </>
    )
}

export default Post