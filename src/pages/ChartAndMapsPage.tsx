import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LineGraph from '../components/LineGraph';
import Map from '../components/Map';
import { useFetchWorldwideData } from '../api/worldwideData'

const ChartsAndMapsPage: React.FC = () => {
    const { data: countriesData, error, isLoading } = useFetchWorldwideData(); // Use the hook
    const [lineGraphData, setLineGraphData] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data for the line graph
                const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
                setLineGraphData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Charts and Maps Page</h1>
            {/* <LineGraph data={lineGraphData} /> */}
            {/* <Map countries={countriesData} /> */}
        </div>
    );
};

export default ChartsAndMapsPage;