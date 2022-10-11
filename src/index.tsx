import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const user1 = 'First ensure that all HTML elements have the box-sizing property set to border-box. This makes sure that... '
const user2 = 'The columns inside a row are all floating to the left'
const user3 = 'Disable the automatic acquisition of types for imports and requires.'
const user4 = 'Listen to me man never give up :)'

const posts = [
    {id: 1, message: user1, color: 'blue', status: 'cyan', name: 'Vasilisk', time: '12:45', likesCount: 10},
    {id: 2, message: user2, color: 'red', status: 'orange', name: 'Simbad', time: '14:03', likesCount: 15},
    {id: 3, message: user3, color: 'yellow', status: 'red', name: 'Germina', time: '14:10', likesCount: 2},
    {id: 4, message: user4, color: 'white', status: 'black', name: 'Donald', time: '14:20', likesCount: 7},
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Donald'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Simbad'},
    {id: 5, name: 'Katya'},
    {id: 6, name: 'Peter'},
]

let messages = [
    {id: 1, message: 'are you Ok?'},
    {id: 2, message: 'how is it going?'},
    {id: 3, message: 'dont give up'}
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById('root')
);