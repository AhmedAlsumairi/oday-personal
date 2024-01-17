
import React from 'react';
import hero from '@/public/images/hero.jpg';

const Hero = () => {
    const imagePath = '/images/hero.jpg';
  return (
  <div className="w-full " >  
    <div className="fixed top-0 h-[25rem] sm:h-[35rem] px-4 w-full bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${imagePath})`}}>
       {/* <div className="absolute top-0 h-full w-full left-0" style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), rgb(50, 60, 79))'}}></div> */}
       <div className="absolute top-0 h-full w-full left-0" style={{backgroundImage: 'linear-gradient(to top, rgb(0 0 0),rgb(0 0 0 / 55%), rgb(14 14 14))'}}></div>
        <div className="relative flex sm:pt-8 flex-col h-full items-center justify-center z-40">
          <h1 className="text-xl sm:text-3xl sm:max-w-[70%] text-center max-sm:mb-4 sm:leading-10 uppercase pt-4 px-4 font-bold text-white" style={{textShadow:'0 0 10px #000'}}>
            Design Shine Gate for Template and Web devlopment
          </h1>
          <p className="text-gray-300 max-sm:hidden sm:max-w-[70%] text-center text-sm sm:text-base mb-4">He formatting rules are not configurable but are already optimized for the best possible output. Note that the formatter will keep spaces and tabs between content tags such as div and span </p>
          <a href="/" className="inline-block text-base sm:text-xl text-white bg-orange-500 py-1.5 sm:py-2 px-2 rounded-lg border border-orange-500">Discover Our Work</a>
        </div>
    </div>
  </div>
  );
};

export default Hero;