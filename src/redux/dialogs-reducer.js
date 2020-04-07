
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Cool"},
        {id: 3, message: "Awesome"}
    ],
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
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state
    }
    return state;
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer;