import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({ handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div><b>Full name</b>: {createField("Full name", Input, "fullName", [])}</div>
        <div><b>Looking for a job</b>:
            {createField("", Input, "lookingForAJob", [], {type: "checkbox"})}
        </div>
        <div><b>My professionals skills</b>:
            {createField("My professionals skills", Textarea, "lookingForAJobDescription", [])}
        </div>
        <div><b>About me</b>:
            {createField("About me", Textarea, "aboutMe", [])}
        </div>
        {/*<div><b>Contacts</b>: {Object.keys(profile.contacts)*/}
        {/*    .map(key => {*/}
        {/*        return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]}/>*/}
        {/*    })}</div>*/}
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm