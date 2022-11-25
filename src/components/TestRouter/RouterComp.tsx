import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import '../../App.css'


function HomePage() {
    return <div className="content">Home page</div>;
}

function Dialogs() {
    return <div className="content"> Dialogs</div>;
}

function Header() {
    return (
        <header className='header'>
            <ul>
                <li>Themes</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>)
}

function Nav() {
    return (

        <div className='nav'>
            <Link to="/" className="link">Home</Link>
            <Link to="/dialogs" className="link">Dialogs</Link>
            <Link to="/news" className="link">News</Link>
            <Link to="/music" className="link">Music</Link>
        </div>)
}

const RouterComp = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <Switch>
                    <Route path="/" exact><HomePage/></Route>
                    <Route path="/dialogs"><Dialogs/></Route>
                </Switch>
                <footer>{new Date().toLocaleDateString()}</footer>
            </div>
        </BrowserRouter>
    );
};

export default RouterComp;