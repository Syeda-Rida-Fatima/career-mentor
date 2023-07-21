import React, { useState } from 'react';
import Link from '../Links';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { tokenValue } from '../User/Login';
let data = null;

export const setSurveyData = (responseData) => {
    data = responseData;
};

export const getSurveyData = () => {
    return data;
};
const Survey = ({ questions }) => {
    const [Myanswers, setMyAnswers] = useState({});
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleAnswer = (questionId, value) => {
        setMyAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: value,
        }));
    };
    const handleButtonSelection = (value) => {
        setSelectedButton(value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const answers = {};
        questions.forEach((question) => {
            const answer = Myanswers[question.id];
            if (answer) {
                answers[question.id] = question.answerOptions[answer].score;
            } else {
                answers[question.id] = 0;
            }

        });
        answers['options'] = selectedButton;
        console.log({ answers })


        try {
            const response = await axios.post('http://127.0.0.1:8000/api/scores/', {

                answers:
                {
                    "mbti-I/E-question1": 1,
                    "mbti-I/E-question2": 1,
                    "mbti-I/E-question3": 0,
                    "mbti-I/E-question4": 0,
                    "mbti-I/E-question5": 1,
                    "mbti-I/E-question6": 1,
                    "mbti-I/E-question7": 0,
                    "mbti-J/P-question15": 0,
                    "mbti-J/P-question16": 1,
                    "mbti-J/P-question17": 1,
                    "mbti-J/P-question18": 0,
                    "mbti-J/P-question19": 1,
                    "mbti-J/P-question20": 1,
                    "mbti-J/P-question21": 0,
                    "mbti-S/N-question8": 1,
                    "mbti-S/N-question9": 1,
                    "mbti-S/N-question10": 0,
                    "mbti-S/N-question11": 0,
                    "mbti-S/N-question12": 1,
                    "mbti-S/N-question13": 0,
                    "mbti-S/N-question14": 0,
                    "mbti-T/F-question22": 0,
                    "mbti-T/F-question23": 0,
                    "mbti-T/F-question24": 1,
                    "mbti-T/F-question25": 1,
                    "mbti-T/F-question26": 1,
                    "mbti-T/F-question27": 1,
                    "mbti-T/F-question28": 1,
                    "mi-question1": 2,
                    "mi-question2": 3,
                    "mi-question3": 5,
                    "mi-question4": 4,
                    "mi-question5": 4,
                    "mi-question6": 3,
                    "mi-question7": 3,
                    "mi-question8": 3,
                    "mi-question9": 3,
                    "mi-question10": 2,
                    "mi-question11": 4,
                    "mi-question12": 3,
                    "mi-question13": 5,
                    "mi-question14": 2,
                    "mi-question15": 2,
                    "mi-question16": 2,
                    "mi-question17": 5,
                    "mi-question18": 3,
                    "mi-question19": 3,
                    "mi-question20": 4,
                    "mi-question21": 5,
                    "mi-question22": 3,
                    "mi-question23": 5,
                    "mi-question24": 4,
                    "mi-question25": 3,
                    "mi-question26": 3,
                    "mi-question27": 3,
                    "mi-question28": 4,
                    "mi-question29": 4,
                    "mi-question30": 4,
                    "mi-question31": 5,
                    "mi-question32": 5,
                    "mi-question33": 5,
                    "mi-question34": 5,
                    "mi-question35": 5,
                    "mi-question36": 3,
                    "options": 2.0,
                    "self-question1": 1,
                    "self-question2": 2

                }

            }, {
                headers: {
                    Authorization: `Token ${tokenValue}`,
                },

            });

            // Handle success response

            const responseData = response.data;
            toast.success('Wonderful! your answers have been processed in AI model')
            setSurveyData(responseData);

        }
        catch (error) {
            console.log(error)

            toast.error(error?.request?.response?.detail)

            // console.error(error); // Handle error response
        }
    };


    const handleOptionClick = (questionId, optionIndex) => {
        handleAnswer(questionId, optionIndex);
    };

    const isAllQuestionsAnswered = Object.keys(Myanswers).length === questions.length;

    const getUnansweredQuestionNumbers = () => {

        const unansweredIndices = questions
            .filter((question) => !Myanswers.hasOwnProperty(question.key))
            .map((question) => question.index);
        return unansweredIndices.join(', ');
    }
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
                    type="button"
                    onClick={() => handleButtonSelection(0.0)}
                    className={`bg-purple-500 hover:bg-pink-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded ${selectedButton === 0.0 ? 'bg-pink-700' : ''
                        }`}
                >
                    Medical
                </button>

                <button
                    type="button"
                    onClick={() => handleButtonSelection(1.0)}
                    className={`bg-purple-500 hover:bg-pink-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded ${selectedButton === 1.0 ? 'bg-pink-700' : ''
                        }`}
                >
                    Engineering
                </button>

                <button
                    type="button"
                    onClick={() => handleButtonSelection(2.0)}
                    className={`bg-purple-500 hover:bg-pink-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded ${selectedButton === 2.0 ? 'bg-pink-700' : ''
                        }`}
                >
                    Either
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div
                        key={index}
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
                                    className={`flex items-center mr-4 mb-2 ${Myanswers[question.id] === optionIndex ? 'text-pink-500 font-bold' : ''
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name={question.id}
                                        value={optionIndex}
                                        checked={Myanswers[question.id] === optionIndex}
                                        onChange={() => handleOptionClick(question.id, optionIndex)}
                                        className="mr-2"
                                    />
                                    {option.text}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}



                <button
                    type="submit"
                    onClick={handleSubmit}
                    //  disabled={!isAllQuestionsAnswered}
                    className="bg-purple-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                > <Link
                    key="submit"
                    to='/History'  >
                        Submit

                    </Link>

                </button>


                {/* Display unanswered question numbers */}
                {!isAllQuestionsAnswered && (
                    <p className="text-red-500 mt-4">
                        Remaining question count(s): {getUnansweredQuestionNumbers()}
                    </p>
                )}
            </form>
            <ToastContainer />
        </div>
    );
};


export default Survey;