import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import Records from './Records';
import { getSurveyData } from '../Questionnaire/Survey';

import Links from '../Links';

function History() {


    const data = getSurveyData();


    const [OpenRecords, setOpenRecords] = useState(true);
    // Extracting engineering and medical fields from the data object
    const engineeringFields = data ? [
        data.Engineering_Field1,
        data.Engineering_Field2,
        data.Engineering_Field3,
        data.Engineering_Field4,
        data.Engineering_Field5
    ] : [];
    const medicalFields = data ? [
        data.Medical_Field1,
        data.Medical_Field2,
        data.Medical_Field3
    ] : [];

    const buttonValue = data ? data.button : null;
    let barsData = [];

    if (buttonValue === 0) {
        engineeringFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10
                });
            }
        });
    } else if (buttonValue === 1) {
        medicalFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10
                });
            }
        });
    } else if (buttonValue === 2) {
        engineeringFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10
                });
            }
        });
        medicalFields.forEach((field, index) => {
            if (field) {
                barsData.push({
                    label: field,
                    percentage: 90 - index * 10
                });
            }
        });
    }

    return (
        <div className="container mx-auto p-4 mt-40">
            <h1 className="text-4xl text-pink-500 font-bold mb-12">AI BASED CAREER MENTOR</h1>

            <div>

                {barsData.map((bar, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex items-center">
                            <div className="w-48">{bar.label}</div>
                            <div className="bg-purple-100 h-4 flex-grow ml-4">
                                <div
                                    className="bg-pink-500 h-full"
                                    style={{ width: `${bar.percentage}%` }}
                                ></div>
                            </div>
                            <div className="ml-4">{bar.percentage}%</div>
                        </div>
                    </div>
                ))}
                <div>

                    <div className='bg-gray-200 px-2 '>
                        <h1 className="text-pink-500 text-2xl font-bold mt-20">Attention:</h1>
                        <h2 className="text-purple-800 pb-2 my-10"> Please note that the AI based Career Mentor is based on MBTI & MI Test which is intended for informational and exploratory purposes only. The career recommendations provided are based on your MBTI and MI test results, but they should not be considered as definitive or absolute. It is important to remember that career choices are multifaceted and depend on various factors such as personal preferences, skills, values, and external circumstances. This platform aims to provide insights and suggestions to assist you in your career exploration, but the final decision should be based on thorough research, self-reflection, and consultation with career professionals.</h2>
                    </div>  </div>
            </div>
            <div>

                <Links
                    key="history"
                    to={OpenRecords ? "/Record" : "/History"}

                    className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                ><button
                    type="button"
                    onClick={() => setOpenRecords(true)}

                >View Records
                    </button>

                </Links>

            </div>
            <ToastContainer />
        </div >

    );

}
export { History };




// import React from 'react';

// function History() {
//     // Example data for the bars
//     const barsData = [
//         { label: 'Bar 1', percentage: 88 },
//         { label: 'Bar 2', percentage: 60 },
//         { label: 'Bar 3', percentage: 40 },
//         { label: 'Bar 4', percentage: 20 },
//         { label: 'Bar 5', percentage: 10 },
//     ];

//     return (

//         <div className="container mx-auto p-4 mt-40">
//             <h1 className="text-4xl font-bold mb-12">AI BASED CAREER MENTOR</h1>
//             <h2 className="text-2xl font-bold mb-8">Hello, I'm result</h2>
//             <div>
//                 {barsData.map((bar, index) => (
//                     <div key={index} className="mb-4">
//                         <div className="flex items-center">
//                             <div className="w-24">{bar.label}</div>
//                             <div className="bg-gray-200 h-4 flex-grow ml-4">
//                                 <div
//                                     className="bg-blue-500 h-full"
//                                     style={{ width: `${bar.percentage}%` }}
//                                 ></div>
//                             </div>
//                             <div className="ml-4">{bar.percentage}%</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {/* <div className="container mx-auto p-4 mt-40">
//                 <h1 className="text-4xl font-bold mb-12">AI BASED CAREER MENTOR</h1>
//                 <h2 className="text-2xl font-bold mb-8">Combined History Snapshot</h2>
//                 <div>
//                     {barsData.map((bar, index) => (
//                         <div key={index} className="mb-4">
//                             <div className="flex items-center">
//                                 <div className="w-24">{bar.label}</div>
//                                 <div className="bg-gray-200 h-4 flex-grow ml-4">
//                                     <div
//                                         className="bg-blue-500 h-full"
//                                         style={{ width: `${bar.percentage}%` }}
//                                     ></div>
//                                 </div>
//                                 <div className="ml-4">{bar.percentage}%</div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="container mx-auto p-4 mt-300">
//                     <h1 className="text-4xl font-bold mb-12">AI BASED CAREER MENTOR</h1>
//                     <h2 className="text-2xl font-bold mb-8">Combined History Snapshot</h2>
//                     <div>
//                         {barsData.map((bar, index) => (
//                             <div key={index} className="mb-4">
//                                 <div className="flex items-center">
//                                     <div className="w-24">{bar.label}</div>
//                                     <div className="bg-gray-200 h-4 flex-grow ml-40">
//                                         <div
//                                             className="bg-blue-500 h-full"
//                                             style={{ width: `${bar.percentage}%` }}
//                                         ></div>
//                                     </div>
//                                     <div className="ml-4">{bar.percentage}%</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div> */}
//         </div>

//     );
// };


// export { History };
