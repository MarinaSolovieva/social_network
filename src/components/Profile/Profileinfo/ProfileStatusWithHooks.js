import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])


    let activateEditMode = () => {
        setEditMode(true)
    }

    let deActivateEditMode =() => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    let onStatusChange =(e)=>{
        setStatus(e.currentTarget.value)
    }

    return (
            <>
                {!editMode &&
                <div>
                    <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status}/>
                </div>
                }
            </>
        )
    }


export default ProfileStatusWithHooks

