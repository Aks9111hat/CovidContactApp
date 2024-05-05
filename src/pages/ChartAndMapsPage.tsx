import React, { useState } from 'react';
import LineGraph from '../components/LineGraph';
import Map from '../components/Map';

const ChartsAndMapsPage: React.FC = () => {
    const [showLineGraph, setShowLineGraph] = useState(false);
    const [showMap, setShowMap] = useState(false);

    const handleLineGraphButtonClick = () => {
        setShowLineGraph(true);
        setShowMap(false);
    };

    const handleMapButtonClick = () => {
        setShowMap(true);
        setShowLineGraph(false);
    };

    return (
        <div className='w-full'>
            <div className='flex justify-around m-5'>
                <button className='p-2 rounded-lg bg-emerald-400' onClick={handleLineGraphButtonClick}>Show Line Graph</button>
                <button className='p-2 rounded-lg bg-rose-500' onClick={handleMapButtonClick}>Show Map</button>
            </div>
            <div className='p-5'>
                {showLineGraph && <LineGraph />}
                {showMap && <Map />}
            </div>
        </div>
    );
};

export default ChartsAndMapsPage;
