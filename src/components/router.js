import React from 'react';
import {Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import User from './user';
import Contact from './contact';
import Notfound from "./notfound";
import ChartComponent from "./ChartComponent";
import App from '../App';

export const routing = (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to={'/realtime'}>Data</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path='/realtime' component={ChartComponent}/>
                <Route exact path="/users" component={User}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Notfound}/>
            </Switch>
        </div>
    </BrowserRouter>
);