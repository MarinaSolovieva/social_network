import React from "react";
import photo from "../unnamed.png";
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={photo} className={s.photo}/>
            </div>
            < div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
            )
            }

            export default ProfileInfo