import MyPosts from "./MyPosts/MyPosts";
import {addPostAC, changeNewTextAC} from "../../redux/state";

const MyPostsContainer = (props:any) => {
    const state = props.store.getState().profilePage

    const addPost = (postMessage:string) => {
        props.store.dispatch(addPostAC(postMessage))
    }

    const updateNewPostText = (newText:string) => {
        props.store.dispatch(changeNewTextAC(newText))
    }

    return <MyPosts
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        posts={state.posts}
        newPostText={state.newPostText}
    />
}


export default MyPostsContainer

