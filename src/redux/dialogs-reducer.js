const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
           return {
                ...state,
                newMessageBody: ' ',
                messages: [...state.messages,{id: 4, message: body} ]
            };

        default:
            return state
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;