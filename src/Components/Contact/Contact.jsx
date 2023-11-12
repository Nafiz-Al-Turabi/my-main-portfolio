import React, { useState } from 'react';
import './Contact.css'
import Side from '../Side/Side';
import { MdOutlineAlternateEmail, MdOutlineMail } from "react-icons/md";
import { FaUser } from 'react-icons/fa6';

const Contact = () => {
    const [nameInputFocus, setNameInputFocus] = useState(false);
    const [emailInputFocus, setEmailInputFocus] = useState(false);
    const [messageInputFocus, setMessageInputFocus] = useState(false);

    const handleNameInputFocus = () => {
        setNameInputFocus(true);
    };

    const handleNameInputBlur = () => {
        setNameInputFocus(false);
    };
    const handleEmailInputFocus = () => {
        setEmailInputFocus(true);
    };

    const handleEmailInputBlur = () => {
        setEmailInputFocus(false);
    };

    const handleMessageInputFocus = () => {
        setMessageInputFocus(true);
    };

    const handleMessageInputBlur = () => {
        setMessageInputFocus(false);
    };
    return (
        <div className="h-screen w-full px-5 md:px-5  " id='scroll-contact' >
            <div className=' lg:flex gap-10 h-screen'>
                <Side></Side>
                <div className='w-full pb-28 lg:pb-0'>
                    <div className='banner h-[760px] md:h-[850px] lg:h-[698px]  bg-gray-500/50 p-5 ' id='scroll'>
                        <h1 className='text-xl font-bold text-white mb-10'>Contact information</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div className='bg-gray-950/80 space-y-2 p-8 shadow-lg'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>Country:</p>
                                    <p className='text-gray-300 fonr-semibold '>Bangladesh</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>City:</p>
                                    <p className='text-gray-300 fonr-semibold '>Naogaon</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>Age:</p>
                                    <p className='text-gray-300 fonr-semibold '>26</p>
                                </div>
                            </div>
                            <div className='bg-gray-950/80 space-y-2 p-8 shadow-lg'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>Email:</p>
                                    <p className='text-gray-300 fonr-semibold '>nafizalturabi@gmail.com</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>Whatsapp:</p>
                                    <p className='text-gray-300 fonr-semibold '>+880 1747-206719</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>Skype:</p>
                                    <p className='text-gray-300 fonr-semibold '>mridul</p>
                                </div>
                            </div>
                            <div className='bg-gray-950/80 space-y-2 p-8 shadow-lg'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>Phone:</p>
                                    <p className='text-gray-300 fonr-semibold '>+880 1755-659843</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>Phone-2:</p>
                                    <p className='text-gray-300 fonr-semibold '>+880 1747-206719</p>
                                </div>

                            </div>
                        </div>
                        <h1 className='text-xl font-bold text-white my-10'>Get in touch</h1>
                        <form className='bg-gray-950/80 px-5 py-10 space-y-10'>
                            <div className='flex items-center'>
                                <FaUser className={`bg-gray-500 text-xl w-12 h-12 p-3 ${nameInputFocus ? 'bg-yellow-400 text-gray-600 duration-500' : ''}`} />
                                <input
                                    onFocus={handleNameInputFocus}
                                    onBlur={handleNameInputBlur}
                                    type="name" name="name" id="" className='bg-gray-700/30 text-gray-400 w-full p-3 focus:outline-none' placeholder='Name' />
                            </div>
                            <div className='flex items-center'>
                                <MdOutlineAlternateEmail className={`bg-gray-500 text-xl w-12 h-12 p-3 ${emailInputFocus ? 'bg-yellow-400 text-gray-600 duration-500' : ''}`} />
                                <input
                                    onFocus={handleEmailInputFocus}
                                    onBlur={handleEmailInputBlur}
                                    type="email" name="email" id="" className='bg-gray-700/30 text-gray-400 w-full p-3 focus:outline-none' placeholder='Email' />
                            </div>
                            <div className='flex '>
                                <MdOutlineMail className={`bg-gray-500 text-xl w-12 h-32 p-3 ${messageInputFocus ? 'bg-yellow-400 text-gray-600 duration-500  ' : ''}`} />
                                <textarea
                                    onFocus={handleMessageInputFocus}
                                    onBlur={handleMessageInputBlur}
                                    type="text" name="message" id="" className='bg-gray-700/30 text-gray-400 w-full h-32 p-3 focus:outline-none' placeholder='Message' />
                            </div>
                            <button type='submit' className='text-sm py-2 px-4 md:py-3 md:px-8 font-semibold tracking-widest bg-yellow-500 uppercase hover:-translate-y-1 duration-300'>
                                Send Message
                            </button>
                        </form>
                        <div className="flex justify-between text-gray-600 bg-gray-950/80 mt-10 p-5">
                            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                            <p>Email: nafizalturabi@gmail.com</p>
                        </div>
                    </div>
                </div>
            </ div>


        </div>
    );
};

export default Contact;