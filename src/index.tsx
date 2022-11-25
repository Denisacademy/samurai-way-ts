import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {store} from "./redux/state";
import RouterComp from "./components/TestRouter/RouterComp";

function rerenderEntireTree() {
    ReactDOM.render(
            <App store={store}/>,
        document.getElementById('root')
    );
}


//     ReactDOM.render(
//         <RouterComp/>,
//         document.getElementById('root')
//     );


rerenderEntireTree();
store.subscribe(rerenderEntireTree);

