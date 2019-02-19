import React, {Component} from 'react';
import './App.css';
import Chart from './components/chart'

const API_URL = "https://nataliia-radina.github.io/react-vis-example/";


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
        };
    }


    componentDidMount() {
        fetch(API_URL)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('something went wrong');
                }
            })
            .then(res => this.setState({
                    results: res.results.filter(r => {
                        return r.name === 'JavaScript';
                    })
                })
            )
    }

    render() {
        const {results} = this.state;
        return (
            <div className="App">
                <Chart data={results}/>
            </div>
        );
    }
}
export default App;
