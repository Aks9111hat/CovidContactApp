// Sidebar to navigate through pages

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-800 text-white w-64 p-4 shadow-red-500">
            <h1 className="flex justify-center items-center text-sm font-bold mb-4 bg-sky-900 rounded p-5 "><span className='w-full text-center bg-black rounded p-2 mx-2'>Akshat </span></h1>
            <ul>
                <li className="mb-2">
                    <Link to="/" className="block hover:text-gray-400 hover:text-xl">Home</Link>
                </li>
                <li className="mb-2">
                    <Link to="/contacts" className="block hover:text-gray-400 hover:text-xl">Contacts</Link>
                </li>
                <li className="mb-2">
                    <Link to="/charts-and-maps" className="block hover:text-gray-400 hover:text-xl">Charts & Maps</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
