import React from "react";
import photo from "../unnamed.png";
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.descriptionBlock}>
            {/*<div>*/}
            {/*    <img src={photo} className={s.photo}/>*/}
            {/*</div>*/}
            < div >
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
            )
            }

            export default ProfileInfo