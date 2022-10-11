import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
//import {MessageItemProps} from "./components/Dialogs/Message/Message";
// git config core.autocrlf true
//https://unlix.ru/%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B0-warning-lf-will-be-replaced-by-crlf-%D0%B2-git-%D0%BA%D0%B0%D0%BA-%D1%80%D0%B5%D1%88%D0%B8%D1%82%D1%8C/
//const Simba: React.FC<Type> = ({user}) => {}

import {DialogItemProps} from './components/Dialogs/DialogItem/DialogItem'
import {MessageItemProps} from './components/Dialogs/Message/Message'
import {PostProps} from './components/Profile/MyPosts/Post/Post'


type AppProps = {
    dialogs : Array<DialogItemProps>
    messages: Array<MessageItemProps>
    posts: Array<PostProps>
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        {/*<Route exact path='/dialogs' component={Dialogs}/>*/}
                        {/*<Route path='/profile' component={Profile}/>*/}
                        <Route exact path='/dialogs' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs} />}/>
                        <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
