
// import {testTree} from "./render";
// import {state} from "./redux/state";
//
// testTree(state)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {state, subscribe} from "./redux/state";

import {addPost, RootStateType, updateNewPostText} from "./redux/state";

function rerenderEntireTree() {
    console.log('rerender')
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)
