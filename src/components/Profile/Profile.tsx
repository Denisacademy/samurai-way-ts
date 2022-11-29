import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {ActionsTypes, ProfilePageType} from "../../redux/state";
import MyPostsContainer from "./MyPostsContainer";

type ProfileProps = {

    state: ProfilePageType //inside newPostText
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: any) => {
    return (
        <div className='content'>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}

export default Profile