import MyPosts from "./MyPosts/MyPosts";
import {addPostAC, changeNewTextAC} from "../../redux/state";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

// const MyPostsContainer = (props: any) => {
//     const state = props.store.getState().profilePage
//
//     const addPost = (postMessage: string) => {
//         props.store.dispatch(addPostAC(postMessage))
//     }
//
//     const updateNewPostText = (newText: string) => {
//         props.store.dispatch(changeNewTextAC(newText))
//     }
//
//     return <MyPosts
//         addPost={addPost}
//         updateNewPostText={updateNewPostText}

//         posts={state.posts}
//         newPostText={state.newPostText}
//     />
// }

type MapStateToPropsType = {
    profilePage: AppStateType
}

const MapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
}

const MapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (postMessage: string) => {
            dispatch(addPostAC(postMessage))
        },
        updateNewPostText: (newText: string) => {
            dispatch(changeNewTextAC(newText))
        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer

