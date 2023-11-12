import React, { useState } from 'react';
import './Home.css'
import Side from '../Components/Side/Side';
import Banner from '../Components/Banner/Banner';
const Home = () => {

    return (
        <div className="h-screen w-full px-5 md:px-5  " id='scroll'>
            <div className=' lg:flex gap-10 h-screen'>
                <Side></Side>
                <div className='w-full pb-28 lg:pb-0'>
                    <Banner></Banner>
                </div>
            </ div>
        </div>
    );
};

export default Home;