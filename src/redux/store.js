import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', like: 15},
                {id: 2, message: 'It\'s my first post', like: 20}

            ],
            newPostText: 'My site'

        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
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
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state)

    }
}




export default store;
window.store = store;

