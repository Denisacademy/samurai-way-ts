import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, {ChangeEvent, createRef} from "react";

import {MyPostsPropsType} from "../MyPostsContainer";

const MyPosts = (props: MyPostsPropsType) => {
    //const newPostElement = createRef<HTMLInputElement>()

    // const addPostHandler = (e: any) => {
    //     e.preventDefault()
    //     if (newPostElement.current) {
    //         props.addPost(newPostElement.current.value)
    //         newPostElement.current.value = ''
    //     }
    // }
    //
    // const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if(newPostElement.current) {
    //         props.updateNewPostText(newPostElement.current.value)
    //     }
    // }

    const addPostHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        props.addPost(props.profilePage.newPostText)
    }

    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const postElements = props.profilePage.posts.map((post: any) => <Post key={post.id}  {...post}/>)

    return (
        <div className={styles.myPosts}>
            <form action="src/components/Profile/Profile">
                <h2>My posts</h2>
                <input name='posUser'
                       onChange={onPostChange}
                    value={props.profilePage.newPostText}
                    // ref={newPostElement}
                       type="text"
                       placeholder='your news...'/>
                <div>
                    <button onClick={addPostHandler} className={styles.btn} type='submit'>Send</button>
                </div>
            </form>
            {postElements}
        </div>
    )
}

export default MyPosts

