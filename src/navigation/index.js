import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import List from '../scenes/logged/customersList';  
import Create from '../scenes/logged/customersCreate';
import Edit from '../scenes/logged/customersEdit';
import Login from '../scenes/auth/login';

/**
 * Sistema de navegacion.
 */
const Navigation = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <List/>
            </Route>
            <Route exact path="/customer">
                <Create/>   
            </Route>
            <Route exact path="/customer/:id">
                <Edit/> 
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
    </Router>
);

export default Navigation;