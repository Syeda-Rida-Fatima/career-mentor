import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import Records from './Records';
import { getSurveyData } from '../Questionnaire/Survey';

import Links from '../Links';

function History() {


    const data = getSurveyData();
    // const data = {
    //     "id": 12,
    //     "gender": 0,
    //     "income_group": 0,
    //     "sensing": 0.5714285714285714,
    //     "introvert": 0.5714285714285714,
    //     "Judging": 0.42857142857142855,
    //     "Thinking": 0.7142857142857143,
    //     "logical_intelligence": 2.8,
    //     "Nature_intelligence": 1.2,
    //     "Visual_intelligence": 2.8,
    //     "Musical_intelligence": 2.6,
    //     "Body_intelligence": 2.4,
    //     "Interpersonal_intelligence": 2.8,
    //     "Intrapersonal_intelligence": 3.8,
    //     "Verbal_intelligence": 3.2,
    //     "Existential_intelligence": 2.6,
    //     "Engineering_Field1": "Computer and Information Systems Engineering",
    //     "Engineering_Field2": "Medical Technology",
    //     "Engineering_Field3": "Software Engineering",
    //     "Engineering_Field4": "Civil Engineering",
    //     "Engineering_Field5": "MBBS",
    //     "Medical_Field1": "Mechanical Engineering",
    //     "Medical_Field2": "Electrical Engineering",
    //     "Medical_Field3": "Nutrition Sciences",
    //     "button": 2.0,
    //     "user": 6
    // }
    const intelligenceData = data ? [

        data.sensing, data.introvert, data.Judging, data.Thinking,
        data.logical_intelligence, data.Nature_intelligence, data.Visual_intelligence,
        data.Musical_intelligence, data.Body_intelligence, data.Interpersonal_intelligence,
        data.Intrapersonal_intelligence, data.Verbal_intelligence, data.Existential_intelligence

    ] : [];
    const totalIntelligence = intelligenceData.reduce((sum, intelligence) => sum + intelligence, 0);
    const intelligenceDataLabels = [
        'Sensing', 'Introvert', 'Judging', 'Thinking',
        'Logical Intelligence', 'Nature Intelligence', 'Visual Intelligence',
        'Musical Intelligence', 'Body Intelligence', 'Interpersonal Intelligence',
        'Intrapersonal Intelligence', 'Verbal Intelligence', 'Existential Intelligence'
    ];
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
            <h1 className="text-4xl text-pink-500 font-bold">THE CAREER MENTOR</h1>
            <h2 className="text-s justify-between text-purple-700 font-bold mb-12">AN ARTIFICIAL INTELLIGENCE BASED CAREER COUNSELLOR</h2>


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
                    <div className="flex flex-wrap">
                        {intelligenceDataLabels.map((label, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
                                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                    <h3 className="text-lg text-purple-700 font-bold mb-2">{label}</h3>
                                    <p className="text-gray-700">
                                        Percentage: {(intelligenceData[index] / totalIntelligence * 100).toFixed(2)}%
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='bg-pink-600 mt-20 rounded-xl '>
                        <h1 className="text-white text-2xl font-bold mx-3 pt-10 ">Attention:</h1>
                        <h2 className="text-white text-sm font-bold pb-5 mx-3 "> Embark on career insights with our AI Mentor, influenced by psychological theory. These suggestions are just a starting point. Your unique qualities shape your path. Blend our guidance with your introspection and expert input for a comprehensive career exploration.</h2>
                    </div>  </div>

                <div className='my-10'>

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
        </div>
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
