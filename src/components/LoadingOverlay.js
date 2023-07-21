import React from 'react'

const Loader = () => {


    return (
        <div>
            <div className="flex flex-row justify-center items-center h-auto bg-white">

                <div className="flex items-center justify-center ">
                    <div className="w-16 h-16 border-b-2 border-pink-900 rounded-full animate-spin"></div>
                </div>
                <div className="flex items-center justify-center ">
                    <div className="w-16 h-16 border-b-2  border-purple-900 rounded-full animate-spin"></div>
                </div>
                <div className="flex items-center justify-center ">
                    <div className="w-16 h-16 border-b-2 border-pink-900 rounded-full animate-spin"></div>


                </div>


            </div> <div className=' justify-center text-align-center '> <p >Processing Your Results</p>
            </div>   </div>);

}

export default Loader;