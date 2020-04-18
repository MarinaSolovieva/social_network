import React from "react";
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./Profileinfo.module.css"

const ProfileInfo = ({profile,status, updateUserStatus }) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.descriptionBlock}>
            < div >
                <img src={profile.photos.large}/>
                ava + description
            </div>
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
        </div>
            )
            }

            export default ProfileInfo