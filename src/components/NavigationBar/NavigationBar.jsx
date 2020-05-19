import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../About'

function NavigationBar() {
    return (
        <Router>
            <div>
                <Route path="/About" component={About} />
            </div>
        </Router>
    )
}

export default NavigationBar
