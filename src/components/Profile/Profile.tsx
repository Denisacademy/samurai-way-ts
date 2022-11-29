import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {ActionsTypes, ProfilePageType} from "../../redux/state";
import MyPostsContainer from "./MyPostsContainer";

const Profile = () => {
    return (
        <div className='content'>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile