import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useFetchGraphData } from '../api/graphData';
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
    const [showCasesGraph, setShowCasesGraph] = useState(false);
    const [showRecoveredGraph, setShowRecoveredGraph] = useState(false);
    const [showDeathsGraph, setShowDeathsGraph] = useState(false);
    const { data, error, isLoading } = useFetchGraphData();
    const chartData = data;
    if (isLoading) {
        // return <div>Loading...</div>;
        return (
            <div className="relative w-full h-full items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
                <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const handleCaseGraphButtonClick = () => {
        setShowCasesGraph(true);
        setShowRecoveredGraph(false);
        setShowDeathsGraph(false);
    };
    const handleRecoveredGraphButtonClick = () => {
        setShowCasesGraph(false);
        setShowRecoveredGraph(true);
        setShowDeathsGraph(false);
    };
    const handleDeathGraphButtonClick = () => {
        setShowCasesGraph(false);
        setShowRecoveredGraph(false);
        setShowDeathsGraph(true);
    };


    // Reformatting chartData to include datasets
    const dataCases = {
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
    const dataRecovered = {
        labels: Object.keys(chartData.recovered),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(chartData.recovered),
                fill: false,
                backgroundColor: 'black',
                borderColor: 'black',
                pointBorderColor: 'green',
                tension: 0.1
            }
        ]
    };
    const dataDeaths = {
        labels: Object.keys(chartData.deaths),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(chartData.deaths),
                fill: false,
                backgroundColor: 'black',
                borderColor: 'black',
                pointBorderColor: 'red',
                tension: 0.1
            }
        ]
    };


    return (
        <div>
            <h2>Worldwide Cases Fluctuations Line Chart</h2>
            <div className='flex justify-around m-5'>
                <button className='p-2 rounded-lg bg-emerald-400' onClick={handleCaseGraphButtonClick}>Show cases Graph</button>
                <button className='p-2 rounded-lg bg-emerald-400' onClick={handleRecoveredGraphButtonClick}>Show Recovered Graph</button>
                <button className='p-2 rounded-lg bg-emerald-400' onClick={handleDeathGraphButtonClick}>Show Deaths Graph</button>
            </div>
            <div>
                {showCasesGraph && <Line data={dataCases} />}
                {showRecoveredGraph && <Line data={dataRecovered} />}
                {showDeathsGraph && <Line data={dataDeaths} />}
            </div>
        </div>
    );
};

export default LineGraph;