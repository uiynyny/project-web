import React from 'react';
import './App.css';
import ChartComponent from "./components/ChartComponent";

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
                <ChartComponent/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;