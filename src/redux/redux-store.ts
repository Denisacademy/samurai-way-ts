import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebar: sidebarReducer,
})

const store = createStore(reducers)
export default store