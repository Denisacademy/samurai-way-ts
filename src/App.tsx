import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import {StoreType} from "./redux/state";

type AppProps = {
    store: StoreType
}

const App: React.FC<AppProps> = ({store}) => {
    const state = store.getState();
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <Dialogs dispatch={store.dispatch.bind(store)}
                                 newMessageBody={state.dialogsPage.newMessageBody}
                                 state={state.dialogsPage}/>}/>
                    <Route path='/profile' render={() =>
                        <Profile
                            dispatch={store.dispatch.bind(store)}
                            state={state.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>
        // <h1></h1>
    )
}

export default App;