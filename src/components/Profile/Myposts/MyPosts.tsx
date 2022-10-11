import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {PostProps} from './Post/Post'

type MyPostsProps = {
    posts: Array<PostProps>
}

const MyPosts = (props: MyPostsProps) => {

    const postElements = props.posts.map(post => <Post key={post.id}  {...post}/>)

    return (
        <div className={styles.myPosts}>
            <form action="src/components/Profile/Profile">
                <h2>My posts</h2>
                <input type="text" placeholder='your news...'/>
                <div>
                    <button className={styles.btn} type='submit'>Send</button>
                </div>
            </form>
            {
                postElements
            }
        </div>
    )
}

export default MyPosts

