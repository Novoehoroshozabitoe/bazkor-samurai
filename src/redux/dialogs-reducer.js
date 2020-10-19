const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Beknazar'},
        {id: 2, name: 'Abybakr'},
        {id: 3, name: 'Ishak'},
        {id: 4, name: 'Razzak'},
        {id: 5, name: 'Abdyrahim'},
        {id: 6, name: 'Rizvan'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT'},
        {id: 3, message: 'Yo'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return  {
                ...state,
                messages: [...state.messages,{id: 4, message: body}]
            };
        default :
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody})

export default dialogsReducer;