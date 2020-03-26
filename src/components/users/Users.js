import React from "react";
import s from "./users.module.css";
import userPhoto from "../../img/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProgress} from "../../redux/Users-reducer";

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props. pageSize);

    let pages = [];
    for (let i=1; i<= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                    props.onPageChanged(p)
                }}> {p} </span>
            })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <NavLink to = {'/profile/' + u.id}>
                       <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                       </NavLink>
                   </div>
                   <div>
                       {u.followed
                           ? <button disabled={props.followingInProgress} onClick={() => {
                               props.toggleFollowingProgress(true)
                               axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                               withCredentials: true,
                                   headers: {
                                   "API-KEY": "0cd59859-5114-47ad-865b-7f95fada4351"
                               }
                           })
                                   .then(response => {
                                       if (response.data.resultCode ===0) {
                                           props.unfollow(u.id)
                                       }
                                       props.toggleFollowingProgress(false)
                                   })
                           }}> UnFollow </button>
                           : <button disabled={props.followingInProgress} onClick={() => {
                               props.toggleFollowingProgress(true)
                               axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {},
                                   {withCredentials: true,
                                       headers: {
                                           "API-KEY": "0cd59859-5114-47ad-865b-7f95fada4351"
                                       }
                                   })
                                   .then(response => {
                                       if (response.data.resultCode ===0) {
                                           props.follow(u.id)
                                       }
                                       props.toggleFollowingProgress(false)
                                   })
                           }}>Follow</button>}
                           </div>
                           </span>
                <span>
                           <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                           </span>
                           <span>
                           <div>{"u.location.country"}</div>
                           <div>{"u.location.city"}</div>
                           </span>
                           </span>
            </div>)
        }
    </div>

}

export default Users