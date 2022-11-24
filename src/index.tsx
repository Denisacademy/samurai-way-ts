
// import {testTree} from "./render";
// import {state} from "./redux/state";
//
// testTree(state)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";


import {store, state, RootStateType} from "./redux/state";

function rerenderEntireTree() {
    //console.log('rerender')
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
//store.getState.call(store, null)

//subscribe(rerenderEntireTree)
store.subscribe(rerenderEntireTree)

// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }