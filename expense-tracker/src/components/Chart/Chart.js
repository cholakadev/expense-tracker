import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const dataValues = props.data.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataValues);


    return (
        <div className='chart'>
            {props.data.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label} 
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label} />)}
        </div>
    )
}

export default Chart;