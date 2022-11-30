import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;