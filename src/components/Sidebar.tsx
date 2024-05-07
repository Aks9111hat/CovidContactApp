// Sidebar to navigate through pages

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className={`h-screen bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white w-screen md:w-64 lg:w-64 xl:w-64 2xl:w-64 p-4 shadow-red-500 overflow-y-hidden ${isOpen ? 'block sm:w-screen' : 'hidden md:block lg:block xl:block 2xl:block'}`}>
                <h1 className="flex justify-center items-center text-sm font-bold mb-4 bg-sky-900 rounded p-5 "><span className='w-full text-center bg-black rounded p-2 mx-2'>Akshat </span></h1>
                <ul>
                    <li className="mb-2">
                        <Link to="/" onClick={toggleSidebar} className="block hover:text-gray-300 hover:underline transition ease-in-out delay-150">Home</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/contacts" onClick={toggleSidebar} className="block hover:text-gray-300 hover:underline transition ease-in-out delay-150">Contacts</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/charts-and-maps" onClick={toggleSidebar} className="block hover:text-gray-300 hover:underline transition ease-in-out delay-150">Charts & Maps</Link>
                    </li>
                </ul>
            </div>
            <button className={`fixed top-1 left-1 z-10 cursor-pointer ${isOpen ? 'hidden' : 'block'} sm:hidden md:hidden lg:hidden xl:hidden`} onClick={toggleSidebar}>
                <MenuIcon sx={{ color: "red" }} />
            </button>
        </div>

    );
};

export default Sidebar;