import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 20},
                {id: 2, message: "It's my first post", likesCount: 34},
            ],
            newPostText: "it-kamasutra.com"
        },

        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Cool"},
                {id: 3, message: "Awesome"}
            ],

            newMessageBody: " ",

            dialogs: [
                {id: 1, name: "Артем"},
                {id: 2, name: "Алина"},
                {id: 3, name: "Семен"},
                {id: 4, name: "Клава"},
                {id: 5, name: "Кристина"},
                {id: 6, name: "Каролина"}
            ]
        }
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}


window.store = store;

export default store;