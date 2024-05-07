import React from 'react';
import { Link } from 'react-router-dom';

// Home Page of the Application

const HomePage: React.FC = () => {
    return (
        <div className='h-screen p-4 flex flex-col justify-around items-center text-center w-full overflow-hidden'>
            <h1 className='text-4xl text-black font-semibold'>Contact Management App</h1>
            <h1 className='text-2xl text-black'>Welcome to the Contact Management App!</h1>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                <Link to="/contacts">
                    <p className='border rounded-lg bg-gray-100 p-10 text-xl text-stone-700 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '> This App stores the data of the Person and also Allows you to Edit and delete that contact data</p>
                </Link>
                <Link to="/charts-and-maps">
                    <p className='border rounded-lg bg-gray-100 p-10 text-xl text-stone-700 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>This App also shows the chart (LineGraph) of daily covid cases and the map containing the countries with thier covid details</p>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
