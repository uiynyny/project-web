import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries,
    makeVisFlexible
} from 'react-vis';

const FlexiPlot = makeVisFlexible(XYPlot);

export default class Chart extends React.Component {

    render() {
        let dataArr = this.props.data.map(d => {
            return {
                x: d.date,
                y: d.rates.CAD
            }
        });
        return (
            <FlexiPlot
                xType="ordinal"
                width={500}
                height={250}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis title="time"/>
                <YAxis title="rates"/>
                <LineSeries
                    data={dataArr}
                    style={{stroke: 'violet', strokeWidth: 3}}/>
            </FlexiPlot>
        );
    }
}