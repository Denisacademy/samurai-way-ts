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

const Profile = (props: any) => {
    console.log('profile props', props)
    return (
        <div className='content'>
            <ProfileInfo/>
            <MyPosts state={props.state}
                // dispatch={props.dispatch}
                // newPostText={props.newPostText}
                // posts={props.posts}
            />
        </div>
    )
}

export default Profile