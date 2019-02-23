import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import User from './components/user';
import Contact from './components/contact';
import Notfound from "./components/notfound";

const routing = (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/user'>User</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/user" component={User}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Notfound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
