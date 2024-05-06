import React, { useState } from 'react';
import LineGraph from '../components/LineGraph';
import Map from '../components/Map';
import { useFetchWorldData } from '../api/worldwideData';
const ChartsAndMapsPage: React.FC = () => {
    const [showLineGraph, setShowLineGraph] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [showWorldDetails, setWorldDetails] = useState(true);
    const { data, error, isLoading } = useFetchWorldData();
    console.log(data)
    const worldData = data;
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleLineGraphButtonClick = () => {
        setShowLineGraph(true);
        setShowMap(false);
        setWorldDetails(false);
    };

    const handleMapButtonClick = () => {
        setShowMap(true);
        setShowLineGraph(false);
        setWorldDetails(false);
    };


    return (
        <div className='w-full'>
            <div className='flex justify-around m-5'>
                <button className='p-2 rounded-lg bg-emerald-400' onClick={handleLineGraphButtonClick}>Show Line Graph</button>
                <button className='p-2 rounded-lg bg-rose-500' onClick={handleMapButtonClick}>Show Map</button>
            </div>
            {showWorldDetails && <div className='flex justify-center items-center p-5 bg-gray-200 my-20'>
                {showWorldDetails &&
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h1 className='p-2 bg-stone-400 text-3xl'>World Wide Covid Data</h1>
                        <p>World Population : {worldData.population}</p>
                        <p>Active Cases : {worldData.active}</p>
                        <p>Countries Affected : {worldData.affectedCountries}</p>
                        <p>World Wide Death : {worldData.deaths}</p>
                        <p>Today's Cases : {worldData.todayCases}</p>
                        <p>Today's Death : {worldData.todayDeaths}</p>
                        <p>Today's Recovered : {worldData.todayRecovered}</p>
                    </div>
                }
            </div>}
            <div className='p-5'>
                {showLineGraph && <LineGraph />}
                {showMap && <Map />}
            </div>
        </div>
    );
};

export default ChartsAndMapsPage;
