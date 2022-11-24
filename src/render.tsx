
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
//
// import {BrowserRouter} from "react-router-dom";
//
// import {addPost, RootStateType, updateNewPostText} from "./redux/state";
//
// export function testTree(state: RootStateType) {
//     console.log('rerender')
//     ReactDOM.render(
//         <BrowserRouter>
//             <App
//                 state={state}
//                 addPost={addPost}
//                 updateNewPostText={updateNewPostText}/>
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }

export {

}

//
// class EventObserver {
//     constructor() {
//         this.observers = [];
//     }
//
//     subscribe(fn) {
//         this.observers.push(fn);
//     }
//
//     unsubscribe(fn) {
//         console.log('test unsubscribe')
//         this.observers = this.observers.filter((subscriber) => subscriber !== fn);
//     }
//
//     broadcast(data) {
//         console.log('letter', data)
//         this.observers.forEach((subscriber) => subscriber(data));
//     }
// }
//
// const getWordCount = (text) => text ? text.trim().split(/\s+/).length : 0;
//
// const wordCountElement = document.createElement('p');
//
// wordCountElement.className = 'wordCount';
// wordCountElement.innerHTML = 'Word Count: <strong id="blogWordCount">0</strong>';
// document.body.appendChild(wordCountElement);
//
// const blogObserver = new EventObserver();
//
// function render(text) {
//     const blogCount = document.getElementById('blogWordCount');
//
//     blogCount.textContent = getWordCount(text);
//     console.log('someone keep on typing :)')
// }
//
// blogObserver.subscribe(render);
//
// const blogPost = document.getElementById('blogPost');
// const unsub = document.getElementById('uns');
// blogPost.addEventListener('keyup', () => blogObserver.broadcast(blogPost.value));
// unsub.addEventListener('click', () => blogObserver.unsubscribe(render))