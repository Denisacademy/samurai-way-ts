import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfileProps = {
    state: ProfilePageType //inside newPostText
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfileProps) => {
    return (
        <div className='content'>
            <ProfileInfo/>
            <MyPosts
                dispatch ={props.dispatch}

                newPostText={props.state.newPostText}
                posts={props.state.posts}/>
        </div>
    )
}

export default Profile