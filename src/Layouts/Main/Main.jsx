import React, { useState } from 'react';
import { FaBars, FaHome, FaUser, FaCog, FaSignOutAlt, FaBlogger, FaNewspaper } from 'react-icons/fa';
import { BiSolidContact } from "react-icons/bi";
import { Link, Outlet } from 'react-router-dom';
import './Main.css'
import MouseTracker from '../../Components/MouseTracker/CustomCursor';


const Main = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    return (
        <div className="main flex h-screen lg:fixed">
            <nav
                className={`backdrop-blur-lg bg-black/30 w-full md:w-1/2 lg:w-[338px]  h-screen fixed p-10 text-white py-4 transition-transform transform z-50 ${
                    isDrawerOpen ? 'translate-x-0 duration-700' : '-translate-x-full duration-500 '
                }`}
            >
                <ul className="mt-6 space-y-3">
                    <li>
                        <Link to="/" onClick={closeDrawer} className="flex items-center p-3 rounded-lg border border-transparent hover:border-slate-300 hover:backdropbackdrop-blur-sm hover:bg-cyan-200/10 duration-300">
                            <FaHome className="mr-2" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={closeDrawer} className="flex items-center p-3 rounded-lg border border-transparent hover:border-slate-300 hover:backdropbackdrop-blur-sm hover:bg-cyan-200/10 duration-300">
                            <FaUser className="mr-2" />
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={closeDrawer} className="flex items-center p-3 rounded-lg border border-transparent hover:border-slate-300 hover:backdropbackdrop-blur-sm hover:bg-cyan-200/10 duration-300">
                            <FaNewspaper className="mr-2" />
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeDrawer} className="flex items-center p-3 rounded-lg border border-transparent hover:border-slate-300 hover:backdropbackdrop-blur-sm hover:bg-cyan-200/10 duration-300">
                            <BiSolidContact className="mr-2" />
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={closeDrawer} className="flex items-center p-3 rounded-lg border border-transparent hover:border-slate-300 hover:backdropbackdrop-blur-sm hover:bg-cyan-200/10 duration-300">
                            <FaBlogger className="mr-2" />
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={closeDrawer} className="flex items-center p-3 rounded-lg border border-transparent hover:border-slate-300 hover:backdropbackdrop-blur-sm hover:bg-cyan-200/10 duration-300">
                            <FaCog className="mr-2" />
                            Settings
                        </Link>
                    </li>
                </ul>
                <button className="  fixed top-1 right-1 rotate-180 " onClick={closeDrawer}>
                    <FaSignOutAlt className="text-white text-2xl" />
                </button>
            </nav>

            <div className="flex-1 lg:pl-16 backdrop-blur-md">
                <button className="" onClick={toggleDrawer}>
                    <FaBars className="text-white fixed top-5 left-5 text-2xl z-40" />
                </button>
                <Outlet />
                <MouseTracker></MouseTracker>
            </div>
        </div>
    );
};

export default Main;
