import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
// git config core.autocrlf true

function App() {
    return (
        <div className="App">
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
