import {connect} from "react-redux";
import MyPosts from "./MyPosts/MyPosts";

import {initialStateType, addPostAC, changeNewTextAC} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    profilePage: initialStateType
}

type mapDispatchToPropsType = {
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postMessage: string) => {
            dispatch(addPostAC(postMessage))
        },
        updateNewPostText: (newText: string) => {
            dispatch(changeNewTextAC(newText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

