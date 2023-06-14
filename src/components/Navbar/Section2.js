

import React from 'react';
import Links from '../Links';
import hero1 from "../../images/hero1.jpeg";
import hero2 from "../../images/hero2.jpeg";
import hero3 from "../../images/hero3.jpeg";
function Section2() {
    return (
        <div >
            <div className="max-w-48xl mx-auto  py-24 relative">
                <div className="relative overflow-hidden">
                    <div className="animation-container">
                        <img
                            src={hero1}
                            alt="Image 1"
                            className="animation-image"
                        />
                        <img
                            src={hero2}
                            alt="Image 2"
                            className="animation-image"
                        />

                        <img
                            src={hero3}
                            alt="Image 3"
                            className="animation-image"
                        />
                        <img
                            src={hero1}
                            alt="Image 1"
                            className="animation-image"
                        />
                    </div>

                    <div className='overlay-content'>

                        <div className="ml-20 mt-12 mr-20 mb-12">
                            <h1 className="text-2xl text-pink-700 font-bold mb-4">Welcome to the Test</h1>
                            <p className="mb-8">Prepare yourself and get the best Career choices now!</p>

                            <Links
                                key="start-test"
                                to="/Survey"
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4"
                            >
                                Start Test
                            </Links>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Section2;
