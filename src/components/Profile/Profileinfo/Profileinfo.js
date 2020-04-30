import React, {useState} from "react";
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "../Profile.module.css"
import userPhoto from "../../../img/user.png"
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, savePhoto, isOwner, saveProfile, ...props}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            ()=> {
                setEditMode(false)
            }
        )
    }

    return (
        <div className={s.descriptionBlock}>
            < div>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}/>}
            </div>
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
        </div>
    )
}


const ProfileData = ({profile, isOwner, goToEditMode, ...props}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div><b>Full name</b>: {profile.fullName}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
        {profile.lookingForAJob &&
        <div><b>My professionals skills</b>: {profile.lookingForAJobDescription}</div>}
        <div><b>About me</b>: {profile.aboutMe}</div>
        <div><b>Contacts</b>: {Object.keys(profile.contacts)
            .map(key => {
                return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]}/>
            })}</div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo