import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {withAuthenticator} from "aws-amplify-react/";

Amplify.configure(aws_exports);

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

App.propTypes = {};

export default withAuthenticator(App, {includeGreetings: true});