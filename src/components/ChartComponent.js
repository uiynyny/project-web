import React, {Component} from 'react';
import Chart from './chart'

class ChartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    fetchData(date) {
        //fetch mock data from api
        return fetch('https://api.exchangeratesapi.io/' + date + '?base=USD&symbols=CAD')
        //convert to json file
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("response error");
                }
            })
            //
            .then((responseJson) => {
                let item = {
                    date: responseJson.date,
                    rates: responseJson.rates
                };
                if (this.state.data.indexOf(item) === -1) {
                    this.state.data.push(item);
                    this.setState({
                        data: this.state.data
                    })
                }
            }).catch((error) => {
                console.log(error)
            })
    }


    componentDidMount() {
        //create a start time frame
        let start = new Date('2010-01-01');

        setInterval(() => {
            //extract the date from the format and increment the date
            let date = start.toJSON().split('T')[0];
            this.fetchData(date);
            start.setDate(start.getDate() + 1)
        }, 5000)
    }

    render() {
        return (
            <div className="ChartComponent">
                <Chart data={this.state.data}/>
            </div>
        );
    }
}

export default ChartComponent;
