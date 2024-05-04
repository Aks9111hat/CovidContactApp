import React from 'react';
import LineGraph from './../components/LineGraph';

const HomePage: React.FC = () => {
    return (
        <div className='flex flex-col justify-around items-center w-full bg-stone-800'>
            <h1 className='text-4xl text-white'>Conatct Management App</h1>
            <p className='text-xl text-emerald-500'>This App stores the data of the Person and also Allows you to Edit and delete that contact data</p>
            <p className='text-xl text-emerald-500'>This App also shows the chart (LineGraph) of daily covid cases and the map containing the countries with thier covid details</p>
            <p className='text-xl text-emerald-500'>Welcome to the Contact Management App!</p>
        </div>
    );
};

export default HomePage;
