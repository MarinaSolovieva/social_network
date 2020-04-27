import React from "react";
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./Profileinfo.module.css"
import userPhoto from "../../../img/user.png"

const ProfileInfo = ({profile,status, updateUserStatus, ...props }) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.descriptionBlock}>
            < div >
                <img src={profile.photos.large || userPhoto } className={s.mainPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
        </div>
            )
            }

            export default ProfileInfo