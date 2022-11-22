import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType, state} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile updateNewPostText={props.updateNewPostText} addPost={props.addPost} state={props.state.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;