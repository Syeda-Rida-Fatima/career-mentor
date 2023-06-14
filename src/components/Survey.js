import React, { useState } from 'react';

const Survey = ({ questions }) => {
    const [answers, setAnswers] = useState({});

    const handleAnswer = (questionId, value) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Calculate scores based on answers
        const scores = {};
        questions.forEach((question) => {
            const answer = answers[question.id];
            if (answer) {
                scores[question.id] = question.answerOptions[answer].score;
            }
        });

        // Handle form submission, e.g., send scores to the server
        console.log(scores);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mt-4 font-bold mb-4">AI BASED CAREER MENTOR</h1>
            <div className='flex '>
                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded"
                >
                    Medical
                </button>

                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded"
                >
                    Enginnering
                </button>

                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-700  mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded"
                >
                    Both
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (

                    <div
                        key={question.id}
                        className="bg-purple-200 p-4 rounded-lg mb-8"
                        style={{ marginTop: index > 0 ? '-1rem' : '0' }}
                    >
                        <h2 className="text-lg font-bold mb-2">{question.text}</h2>
                        <div className="flex flex-wrap">
                            {question.answerOptions.map((option, optionIndex) => (
                                <label
                                    key={optionIndex}
                                    className={`flex items-center mr-4 mb-2 ${answers[question.id] === optionIndex
                                        ? 'text-blue-500'
                                        : ''
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name={question.id}
                                        value={optionIndex}
                                        checked={answers[question.id] === optionIndex}
                                        onChange={(e) =>
                                            handleAnswer(question.id, e.target.value)
                                        }
                                        className="mr-2"
                                    />
                                    {option.text}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Survey;
