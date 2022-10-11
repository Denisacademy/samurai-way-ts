import styles from "./Post.module.css";
import React from "react";


// type PostType = {
//     message: string
//     name: string
//     status: string
//     color: string
//     time: string
//     id: number
// }


export type PostProps = {
    message: string
    name: string
    status: string
    color: string
    time: string
    id: number
    // likesCount: number
}


const time = new Date().getHours() + ':' + new Date().getMinutes()

const Post = (props: PostProps) => {
    return (
        <div className={styles.userMessage}>
            <h3 style={{color: props.color}}>
                <span style={{background: props.status}} className={styles.status}></span>
                {props.name}
            </h3>
            <p>{props.message}</p>
            <span className={styles.time}>{props.time}</span>
        </div>
    )
}

export default Post