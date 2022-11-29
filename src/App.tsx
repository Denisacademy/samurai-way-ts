import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import {ActionsTypes, StoreType} from "./redux/state";

// type StoreType = {
//     dispatch : (action: ActionsTypes) => void
// }

type AppProps = {
    store: StoreType
}

const App: React.FC<any> = (props) => {
    console.log(props)
    return (
        <BrowserRouter>
            {/*<h1>23</h1>*/}
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' render={() =>*/}
                    {/*    <Dialogs*/}
                    {/*        dispatch={store.dispatch.bind(store)}*/}
                    {/*        newMessageBody={state.dialogsReducer.newMessageBody}*/}
                    {/*        state={props.store}/>}/>*/}
                    <Route path='/profile' render={() => <Profile state={props.store}/>}
                    />
                </div>
            </div>
        </BrowserRouter>
        // <h1></h1>
    )
}

export default App;