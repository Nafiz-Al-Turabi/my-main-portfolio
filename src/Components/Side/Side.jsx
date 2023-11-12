import React from 'react';
import { FaFacebook, FaGit, FaInstagram } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import my_image from '../../assets/my-image.jpg'
import Details from '../Details/Details';

const Side = () => {
    return (
        <div className="h-screen md:h-screen lg:h-[90%] w-full md:w-full lg:w-80 mt-10  md:mt-10  lg:mt-0  ">
            <div className='backdrop-blur-sm bg-gray-500/30 py-5'>
                <div className='flex justify-center relative'>
                    <img className='h-24 rounded-full' src={my_image} alt="" />
                    <div className='absolute bottom-2 left-[215px] md:hidden lg:block lg:bottom-3 lg:left-40 h-3 w-3 rounded-full bg-white animate-ping' ></div>
                    <div className='absolute bottom-2 left-[215px] md:hidden lg:block lg:bottom-3 lg:left-40 h-3 w-3 rounded-full bg-green-400 ' title='I am available for hire'></div>
                </div>
                <h1 className='text-center text-white mt-2 font-bold'>Nafiz Al Turabi</h1>
                <p className='text-gray-500 font-semibold text-center mt-4'>Full Stack Web Developer</p>
            </div>
            <div>
                <Details></Details>
            </div>
            <div className='backdrop-blur-md bg-white/30 flex items-certer justify-center py-2 space-x-5'>
                <FaFacebook className='text-2xl text-white border border-gray-50 p-1' />
                <FaLinkedinIn className='text-2xl text-white border border-gray-50 p-1' />
                <FaGit className='text-2xl text-white border border-gray-50 p-1' />
                <FaInstagram className='text-2xl text-white border border-gray-50 p-1' />
            </div>
        </div>
    );
};

export default Side;