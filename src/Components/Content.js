import React from 'react';
import { Link } from 'react-router-dom';
import ImageOne from '../images/cook.jpg';
import ImageTwo from '../images/dusting.jpg';

const Content = () => {
    return (
        <>
        <h1 className="text-5xl text-center my-10 text-indigo-500">Our Popular Services</h1>
        <div className="flex flex-row justify-center items-center bg-white h-screen font-bold py-20">
        <img src={ImageOne} alt='egg' className='h-full rounded mb-20 mr-5 shadow' />
        <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl mb-2'>Get A Daily Cook</h2>
        <p className='mb-2'>This provide you a cook who will help you to make dishes</p>
          <span>Charge: $18</span>
          <Link to="/" className='py-5 px-5 text-white bg-indigo-500 rounded-full mt-5 text-1xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center'>Book Now</Link>

        </div>
        </div>
        <div className="flex flex-row justify-center items-center bg-white h-screen font-bold py-20">
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 mr-5 shadow' />
        <div className="flex flex-col justify-center items-center bg-red">
        <h2 className='text-2xl mb-2'>Get A Cleaner</h2>
        <p className='mb-2'>This provide you a cook who will help you to clean home</p>
          <span>Charge: $18</span>
          <Link to="/" className='py-5 px-5 text-white bg-indigo-500 rounded-full mt-5 text-1xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center'>Book Now</Link>
        </div>
        </div>
        </>
    );
};

export default Content;