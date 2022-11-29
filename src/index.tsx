import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import RouterComp from "./components/TestRouter/RouterComp";
import store from './redux/redux-store'

let rerenderEntireTree = () => ReactDOM.render(<App store={store}/>, document.getElementById('root'));

rerenderEntireTree();

store.subscribe(() => rerenderEntireTree());

