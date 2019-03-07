import React from 'react';
import {Link, Route} from "react-router-dom";

const user_holder= ({match})=><p>{match.params.id}</p>

class User extends React.Component{
    render(){
        return (
            <div>
                <h1>Users</h1>
                <ul>
                    <li><Link to={'/user/1'}>User 1</Link></li>
                    <li><Link to={'/user/2'}>User 2</Link></li>
                    <li><Link to={'/user/3'}>User 3</Link></li>
                </ul>
                <Route path={'/user/:id'} component={user_holder}/>
            </div>
        )
    }
}

export default User;