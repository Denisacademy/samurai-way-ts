import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

import {StoreType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

// type StoreType = {
//     dispatch : (action: ActionsTypes) => void
// }

type AppProps = {
    store: StoreType
}

const App: React.FC<any> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;