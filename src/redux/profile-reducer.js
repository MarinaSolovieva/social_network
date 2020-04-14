import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 34},
    ],
    profile:null,
    status: " "
}


const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
           return {
               ...state,
               newPostText: ' ',
               posts: [...state.posts, newPost ]
           };
        }

        case SET_USER_PROFILE: {
                return {
                    ...state,
                    profile: action.profile
                }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;

    }
    return state;
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => {
    return(dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getUserStatus = (userId) => {
    return(dispatch) => {
        profileAPI. getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateUserStatus = (status) => {
    return(dispatch) => {
        profileAPI.updateStatus (status).then(response => {
            if (response.data.resultCode === 0)
            dispatch(setStatus(status))
        })
    }
}


export default profileReducer;