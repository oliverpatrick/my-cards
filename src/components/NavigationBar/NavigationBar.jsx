import React from 'react';
import '../../scss/NavigationBar.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignUp from '../SignUp'
// import About from '../About'

function NavigationBar() {
    return (
        <Router>
            <div className="header">
                <nav className="navbar">
                    <div className="navbar__left">
                        <h1>Cards</h1>
                    </div>
                        
                    <div className="navbar__right">
                        <Link to="/">Home</Link>
                        <Link to="/about"><p>About</p></Link>
                        <p>Page 4</p>
                        <p>Placeholder</p>
                        <Link to="/signup"><button className="button-style">Sign Up</button></Link>
                        <Link to="/login"><button className="button-style">Login</button></Link>
                    </div>
                </nav>
                <div className="sub-header">
                    <div className="sub-header__tabs">Notifications</div>
                    <div className="sub-header__tabs">Top</div>
                    <div className="sub-header__tabs">New</div>
                    <div className="sub-header__tabs">Create</div>
                </div>
            </div>

            <Switch>
                <Route exact path="/Signup">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    )
}

export default NavigationBar
