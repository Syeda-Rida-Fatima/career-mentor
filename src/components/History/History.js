import React from 'react';

function History() {
    // Example data for the bars
    const barsData = [
        { label: 'Bar 1', percentage: 88 },
        { label: 'Bar 2', percentage: 60 },
        { label: 'Bar 3', percentage: 40 },
        { label: 'Bar 4', percentage: 20 },
        { label: 'Bar 5', percentage: 10 },
    ];

    return (

        <div className="container mx-auto p-4 mt-40">
            <h1 className="text-4xl font-bold mb-12">AI BASED CAREER MENTOR</h1>
            <h2 className="text-2xl font-bold mb-8">Hello, I'm result</h2>
            <div>
                {barsData.map((bar, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex items-center">
                            <div className="w-24">{bar.label}</div>
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
            {/* <div className="container mx-auto p-4 mt-40">
                <h1 className="text-4xl font-bold mb-12">AI BASED CAREER MENTOR</h1>
                <h2 className="text-2xl font-bold mb-8">Combined History Snapshot</h2>
                <div>
                    {barsData.map((bar, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex items-center">
                                <div className="w-24">{bar.label}</div>
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
                <div className="container mx-auto p-4 mt-300">
                    <h1 className="text-4xl font-bold mb-12">AI BASED CAREER MENTOR</h1>
                    <h2 className="text-2xl font-bold mb-8">Combined History Snapshot</h2>
                    <div>
                        {barsData.map((bar, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex items-center">
                                    <div className="w-24">{bar.label}</div>
                                    <div className="bg-gray-200 h-4 flex-grow ml-40">
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
            </div> */}
        </div>

    );
};


export { History };
