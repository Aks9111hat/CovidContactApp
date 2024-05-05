import React from 'react';
import { Line } from 'react-chartjs-2';
import chartData from './lineChartData.json';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, //x Axis
    LinearScale, // y axis
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const LineGraph: React.FC = () => {
    // Reformatting chartData to include datasets
    const data = {
        labels: Object.keys(chartData.cases),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(chartData.cases),
                fill: false,
                backgroundColor: 'black',
                borderColor: 'black',
                pointBorderColor: 'aqua',
                tension: 0.1
            }
        ]
    };


    return (
        <div>
            <h2>Worldwide Cases Fluctuations Line Chart</h2>
            <Line data={data} />
            {/* <Line
                data={data}
            //    options={options}
            ></Line> */}
        </div>
    );
};

export default LineGraph;
