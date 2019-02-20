import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const Chart = (props) => {

    // const dataArr = props.data.map((d) => {
    //     return {
    //         x: d.year + '/' + d.quarter,
    //         y: parseFloat(d.count / 1000)
    //     }
    // });

    const dataArr = props.data.map(d=>{
        return {
            x: d.date,
            y: d.rates.CAD
        }
    });

    return (
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines/>
            <HorizontalGridLines/>
            <XAxis title="time"/>
            <YAxis title="rates"/>
            <LineSeries
                data={dataArr}
                style={{stroke: 'violet', strokeWidth: 3}}/>
        </XYPlot>
    );
}

export default Chart;