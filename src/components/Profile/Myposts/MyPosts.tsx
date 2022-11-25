import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, {ChangeEvent, createRef} from "react";

import {ActionsTypes, addPostAC, PostsType, changeNewTextAC} from "../../../redux/state";


type MyPostsProps = {
    posts: Array<PostsType>
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

// const addPostActionCreator = (postMessage: string) => {
//     const action: ActionsTypes = {
//         type: "ADD-POST",
//         postMessage: postMessage
//     }
//     return action
// }
//
// const onPostChangeActionCreator = (newText: string) => {
//     const action: ActionsTypes = {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: newText
//     }
//     return action
// }

const MyPosts = (props: MyPostsProps) => {
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
        //props.addPost(props.newPostText)
        //console.log('opps', e)
        //debugger

        //props.dispatch({ type: 'ADD-POST', postMessage: props.newPostText })
        props.dispatch(addPostAC(props.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        //props.updateNewPostText(e.currentTarget.value)
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText : e.currentTarget.value})
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }

    const postElements = props.posts.map(post => <Post key={post.id}  {...post}/>)

    return (
        <div className={styles.myPosts}>
            <form action="src/components/Profile/Profile">
                <h2>My posts</h2>
                <input name='posUser'
                       onChange={onPostChange}
                       value={props.newPostText}
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

