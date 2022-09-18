import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
// git config core.autocrlf true
//https://unlix.ru/%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B0-warning-lf-will-be-replaced-by-crlf-%D0%B2-git-%D0%BA%D0%B0%D0%BA-%D1%80%D0%B5%D1%88%D0%B8%D1%82%D1%8C/

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
