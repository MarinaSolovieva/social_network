import React from "react";
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo  savePhoto = {props.savePhoto} isOwner={props.isOwner} profile={props.profile}  status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer  store = {props.store}/>
        </div>
    )
}

export default Profile;