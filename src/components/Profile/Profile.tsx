import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {PostProps} from './MyPosts/Post/Post'

type ProfileProps = {
    posts: Array<PostProps>
}

const Profile = (props: ProfileProps) => {
    return (
        <div className='content'>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile