import React from 'react';

function History() {
    const data = {
        "id": 12,
        "gender": 0,
        "income_group": 0,
        "sensing": 0.5714285714285714,
        "introvert": 0.5714285714285714,
        "Judging": 0.42857142857142855,
        "Thinking": 0.7142857142857143,
        "logical_intelligence": 2.8,
        "Nature_intelligence": 1.2,
        "Visual_intelligence": 2.8,
        "Musical_intelligence": 2.6,
        "Body_intelligence": 2.4,
        "Interpersonal_intelligence": 2.8,
        "Intrapersonal_intelligence": 3.8,
        "Verbal_intelligence": 3.2,
        "Existential_intelligence": 2.6,
        "Engineering_Field1": "Computer and Information Systems Engineering",
        "Engineering_Field2": "Medical Technology",
        "Engineering_Field3": "Software Engineering",
        "Engineering_Field4": "Civil Engineering",
        "Engineering_Field5": "MBBS",
        "Medical_Field1": "Mechanical Engineering",
        "Medical_Field2": "Electrical Engineering",
        "Medical_Field3": "Nutrition Sciences",
        "button": 1.0,
        "user": 6
    };
    const query = [
        {
            "Engineering_Field1": "0",
            "Engineering_Field2": "0",
            "Engineering_Field3": "0",
            "Engineering_Field4": "0",
            "Engineering_Field5": "0",
            "Medical_Field1": "Biotechnology",
            "Medical_Field2": "Nutrition Sciences",
            "Medical_Field3": "D-Pharmacy",
            "button": 1.0
        },
        {
            "Engineering_Field1": "Electrical Engineering",
            "Engineering_Field2": "Computer and Information Systems Engineering",
            "Engineering_Field3": "Software Engineering",
            "Engineering_Field4": "Civil Engineering",
            "Engineering_Field5": "Mechanical Engineering",
            "Medical_Field1": "0",
            "Medical_Field2": "0",
            "Medical_Field3": "0",
            "button": 0.0
        },
        {
            "Engineering_Field1": "Computer and Information Systems Engineering",
            "Engineering_Field2": "Medical Technology",
            "Engineering_Field3": "Software Engineering",
            "Engineering_Field4": "Civil Engineering",
            "Engineering_Field5": "MBBS",
            "Medical_Field1": "Mechanical Engineering",
            "Medical_Field2": "Electrical Engineering",
            "Medical_Field3": "Nutrition Sciences",
            "button": 2.0
        },
        {
            "Engineering_Field1": "Computer and Information Systems Engineering",
            "Engineering_Field2": "Medical Technology",
            "Engineering_Field3": "Software Engineering",
            "Engineering_Field4": "Civil Engineering",
            "Engineering_Field5": "MBBS",
            "Medical_Field1": "Mechanical Engineering",
            "Medical_Field2": "Electrical Engineering",
            "Medical_Field3": "Nutrition Sciences",
            "button": 2.0
        },
        {
            "Engineering_Field1": "Computer and Information Systems Engineering",
            "Engineering_Field2": "Medical Technology",
            "Engineering_Field3": "Software Engineering",
            "Engineering_Field4": "Civil Engineering",
            "Engineering_Field5": "MBBS",
            "Medical_Field1": "Mechanical Engineering",
            "Medical_Field2": "Electrical Engineering",
            "Medical_Field3": "Nutrition Sciences",
            "button": 2.0
        }
    ];
    const showEngineeringFields = query.some(record => record.button === 0.0);
    const showMedicalFields = query.some(record => record.button === 1.0);
    const showBothFields = query.some(record => record.button === 2.0);
    // Extracting engineering and medical fields from the data object
    const engineeringFields = [
        data.Engineering_Field1,
        data.Engineering_Field2,
        data.Engineering_Field3,
        data.Engineering_Field4,
        data.Engineering_Field5
    ];
    const medicalFields = [
        data.Medical_Field1,
        data.Medical_Field2,
        data.Medical_Field3
    ];

    const buttonValue = data.button;
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
            <h1 className="text-4xl font-bold mb-12">AI BASED CAREER MENTOR</h1>
            <h2 className="text-2xl font-bold mb-8">Hello, I'm result</h2>
            <div>
                {barsData.map((bar, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex items-center">
                            <div className="w-48">{bar.label}</div>
                            <div className="bg-gray-200 h-4 flex-grow ml-4">
                                <div
                                    className="bg-blue-500 h-full"
                                    style={{ width: `${bar.percentage}%` }}
                                ></div>
                            </div>
                            <div className="ml-4">{bar.percentage}%</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container mx-auto p-4 mt-40">
                <h1 className="text-4xl font-bold mb-12">AI BASED CAREER MENTOR</h1>
                <h2 className="text-2xl font-bold mb-8">Previous Records</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {query.map((record, index) => {
                        const engineeringFields = [
                            record.Engineering_Field1,
                            record.Engineering_Field2,
                            record.Engineering_Field3,
                            record.Engineering_Field4,
                            record.Engineering_Field5
                        ];
                        const medicalFields = [
                            record.Medical_Field1,
                            record.Medical_Field2,
                            record.Medical_Field3
                        ];

                        const barsData = [];
                        let fieldIndex = 1;

                        if (showEngineeringFields || showBothFields) {
                            engineeringFields.forEach((field, index) => {
                                if (field != 0) {
                                    barsData.push({
                                        label: `${field}`,
                                        percentage: 90 - index * 10
                                    });
                                    fieldIndex++;
                                }
                            });
                        }

                        if (showMedicalFields || showBothFields) {
                            medicalFields.forEach((field, index) => {
                                if (field != 0) {
                                    barsData.push({
                                        label: `${field} `,
                                        percentage: 90 - index * 10
                                    });
                                    fieldIndex++;
                                }
                            });
                        }

                        return (
                            <div key={index}>
                                <div className="bg-white rounded-lg shadow-md p-4">
                                    <h3 className="text-lg font-bold mb-2">Record {index + 1}</h3>
                                    {barsData.map((bar, index) => (
                                        <div key={index} className="mb-4">
                                            <div className="flex items-center">
                                                <div className="w-48">{bar.label}</div>
                                                <div className="bg-gray-200 h-4 flex-grow ml-4">
                                                    <div
                                                        className="bg-blue-500 h-full"
                                                        style={{ width: `${bar.percentage}%` }}
                                                    ></div>
                                                </div>
                                                <div className="ml-4">{bar.percentage}%</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
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
