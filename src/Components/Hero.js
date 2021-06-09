import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-indigo-500 h-screen flex flex-col justify-center items-center">
            <h1 className='lg:text-5xl md:text-7xl sm:text-5xl text-3xl font-black mb-5'>
              Welcome to Easy Life
      </h1>
      <p className="text-2xl text-white mb-14">Our service is about to provide worker for various purpose such as cleaning, dusting, cooking and so on</p>
      <Link to="/" className='py-6 px-10 bg-gray-300 text-indigo-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'>Book Now</Link>

        </div>
    );
};

export default Hero;