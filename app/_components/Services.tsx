
import React from 'react';

const Services = () => {
  const imagePath = '/images/01.png';
  const imagePath2 = '/images/02.png';
  const imagePath3 = '/images/03.png';
  const imagePath4 = '/images/04.png';
  return (

      <div className="flex flex-col sm:py-8  bg-[#080808]">
        <div className="p-4 w-11/12 mx-auto">
        <h2 className="text-3xl text-center px-8 mb-6 text-white font-semibold">Our Services</h2>
        <p className="text-base text-gray-300 text-center leading-7 px-8">Search the world's ,information including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
       
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8">
          <div className="p-2 flex flex-col justify-center pt-8 border rounded-xl border-[#8849a9]">
            <div className="pb-5 w-[7.5rem] flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-2xl uppercase font-semibold text-[#ca82ef]">Web Deveopment</h2>
              <h2 className="text-sm sm:text-md  text-[#00ba35] mt-3">Web Deveopment Categories Based on Background </h2>
              <p className="text-sm text-gray-300 text-center leading-6 mt-3 sm:px-3">Search including videos and more. Google has many special features to help you find exactly what you're looking </p>
              <div className="p-1 flex justify-around mt-6 mb-4">
                <button className='px-4 py-2 border-[0.13rem] border-[#4a235e] rounded text-gray-100 text-sm' style={{borderRadius:'36px 67px'}} >Request this Service
               
                </button>
                <button className='px-4 py-2 flex items-center border-[0.13rem] bg-[#00ba35] border-[#00ba35] rounded text-black font-semibold text-sm' style={{borderRadius:'36px 67px'}} >Service Info 
                <span className="ml-1">
                <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" >
                      <path fill="#FFFFFF" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
                      <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                        M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
                      <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
                        "/>
                      </svg>
                    </span>
                </button>

              </div>
            </div>
          </div>


          <div className="p-2 flex flex-col justify-center pt-8 border rounded-xl border-[#8849a9]">
            <div className="pb-5 w-[7.5rem]  flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath2}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-2xl uppercase font-semibold text-[#ca82ef]">Mobile Design</h2>
              <h2 className="text-sm sm:text-md  text-[#00ba35] mt-3">Web Deveopment Categories Based on Background </h2>
              <p className="text-sm text-gray-300 text-center leading-6 mt-3 sm:px-3">Search including videos and more. Google has many special features to help you find exactly what you're looking </p>
              <div className="p-1 flex justify-around mt-6 mb-4">
                <button className='px-4 py-2 border-[0.13rem] border-[#4a235e] rounded text-gray-100 text-sm' style={{borderRadius:'36px 67px'}} >Request this Service
               
                </button>
                <button className='px-4 py-2 flex items-center border-[0.13rem] bg-[#00ba35] border-[#00ba35] rounded text-black font-semibold text-sm' style={{borderRadius:'36px 67px'}} >Service Info 
                <span className="ml-1">
                <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" >
                      <path fill="#FFFFFF" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
                      <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                        M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
                      <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
                        "/>
                      </svg>
                    </span>
                </button>

              </div>
            </div>
          </div>


          <div className="p-2 flex flex-col justify-center pt-8 border rounded-xl border-[#8849a9]">
            <div className="pb-5 w-[7.5rem]  flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath3}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-2xl uppercase font-semibold text-[#ca82ef]">Intero Preparion</h2>
              <h2 className="text-sm sm:text-md  text-[#00ba35] mt-3">Web Deveopment Categories Based on Background </h2>
              <p className="text-sm text-gray-300 text-center leading-6 mt-3 sm:px-3">Search including videos and more. Google has many special features to help you find exactly what you're looking </p>
              <div className="p-1 flex justify-around mt-6 mb-4">
                <button className='px-4 py-2 border-[0.13rem] border-[#4a235e] rounded text-gray-100 text-sm' style={{borderRadius:'36px 67px'}} >Request this Service
               
                </button>
                <button className='px-4 py-2 flex items-center border-[0.13rem] bg-[#00ba35] border-[#00ba35] rounded text-black font-semibold text-sm' style={{borderRadius:'36px 67px'}} >Service Info 
                <span className="ml-1">
                <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" >
                      <path fill="#FFFFFF" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
                      <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                        M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
                      <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
                        "/>
                      </svg>
                    </span>
                </button>

              </div>
            </div>
          </div>


          

          {/* <div className="p-2 flex flex-col justify-center bg-[#1f2020] border rounded-lg border-[#3a3737]">
            <div className="pb-5 border-b w-24  flex items-center mx-auto border-b-[#3c3c3c]">
              <img className='w-full ' src={`${imagePath2}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-xl font-semibold text-white">Design For Painting</h2>
              <p className="text-md text-gray-300 text-center leading-7 mt-3 sm:px-3">Search  including webpages, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
            </div>
          </div>

          <div className="p-2 flex flex-col justify-center bg-[#1f2020] border rounded-lg border-[#3a3737]">
            <div className="pb-5 border-b w-24 flex items-center mx-auto border-b-[#3c3c3c]">
              <img className='w-full  ' src={`${imagePath3}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-xl font-semibold text-white">Couses Training</h2>
              <p className="text-md text-gray-300 text-center leading-7 mt-3 sm:px-3">Search  including webpages, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
            </div>
          </div>

          <div className="p-2 flex flex-col justify-center bg-[#1f2020] border rounded-lg border-[#3a3737]">
            <div className="pb-5 border-b w-24 flex items-center mx-auto border-b-[#3c3c3c]">
              <img className='w-full ' src={`${imagePath4}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-xl font-semibold text-white">Coding Websites</h2>
              <p className="text-md text-gray-300 text-center leading-7 mt-3 sm:px-3">Search  including webpages, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
            </div>
          </div> */}
        </div>
        </div>
       
      </div>
      
  );
};

export default Services;