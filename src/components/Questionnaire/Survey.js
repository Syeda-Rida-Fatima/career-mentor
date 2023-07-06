import React, { useState } from 'react';
import Link from '../Links';
import axios from 'axios';
const Survey = ({ questions }) => {
    const [answers, setAnswers] = useState({});
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const handleAnswer = (questionId, value) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const scores = {};
        questions.forEach((question) => {
            const answer = answers[question.id];
            if (answer) {
                scores[question.id] = question.answerOptions[answer].score;
            } else {
                scores[question.id] = 0;
            }

        });
        console.log({ scores })

        // try {
        //     const response = await axios.post('http://127.0.0.1:8000/api/scores/', {
        //         field1: 'f8d71b3cf00752d81a847dbb99153859f8576c74a06ec8a9df681f4518b41ecb',
        //         field2: 'alam',
        //         score: { scores },
        //     }, {
        //         headers: {
        //             Authorization: 'Token 75d0c2091cf7e068f4d44824cda9dbda676e2c8c448429e227b0af9c7ad5a26e',
        //         },
        //     });

        //     console.log(response.data); // Handle success response
        // } catch (error) {
        //     console.error(error); // Handle error response
        // }
    };


    const handleOptionClick = (questionId, optionIndex) => {
        handleAnswer(questionId, optionIndex);
    };

    const isAllQuestionsAnswered = Object.keys(answers).length === questions.length;

    const unansweredQuestions = questions
        .filter((question) => !answers.hasOwnProperty(question.id))
        .map((question, index) => index + 1);

    return (
        <div className="container mx-auto p-4 mt-40">

            <h1 className="text-4xl font-bold mb-12">AI BASED CAREER MENTOR</h1>
            <div className="bg-purple-200 p-4  rounded-lg mb-8">
                <h1 className='text-2xl font-bold text-black-500'>Note: </h1>
                <ul><li>Please choose the answer that best describes you</li>
                    <li>It is advised not to spend much time on choosing the right option.</li>
                    <li>All information will be used solely for educational and research purposes.</li>
                    <li> We will NOT, in any circumstances, share your information with other individuals or organizations. </li>
                </ul>
            </div>
            <div className="flex">
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
                    Engineering
                </button>

                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded"
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
                        <h2 className="text-lg font-bold mb-2">
                            ({index + 1}) {question.text}
                        </h2>
                        <div className="flex flex-wrap">
                            {question.answerOptions.map((option, optionIndex) => (
                                <label
                                    key={optionIndex}
                                    className={`flex items-center mr-4 mb-2 ${answers[question.id] === optionIndex ? 'text-blue-500 font-bold' : ''
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name={question.id}
                                        value={optionIndex}
                                        checked={answers[question.id] === optionIndex}
                                        onChange={() => handleOptionClick(question.id, optionIndex)}
                                        className="mr-2"
                                    />
                                    {option.text}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

              //Submit button
                /* <Link
                    key="submit"
                    to='/History'  >
                    <button
                        type="submit"
                        disabled={!isAllQuestionsAnswered}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit



                    </button></Link>

                {/* Display unanswered question numbers */}
                {!isAllQuestionsAnswered && (
                    <p className="text-red-500 mt-4">
                        Please answer the following question(s): {unansweredQuestions.join(', ')}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Survey;
