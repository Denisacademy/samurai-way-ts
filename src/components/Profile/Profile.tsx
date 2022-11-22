import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {ProfilePageType} from "../../redux/state";

type ProfileProps = {
    state: ProfilePageType //inside newPostText
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfileProps) => {
    return (
        <div className='content'>
            <ProfileInfo/>
            <MyPosts
                updateNewPostText ={props.updateNewPostText}
                newPostText={props.state.newPostText}
                addPost={props.addPost}
                posts={props.state.posts}/>
        </div>
    )
}

export default Profile