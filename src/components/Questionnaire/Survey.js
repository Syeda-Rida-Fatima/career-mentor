import React, { useState } from 'react';
import Link from '../Links';
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
    // const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
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
                answers: {

                    mbtiI_E_question1: 1,
                    mbtiI_E_question2: 0,
                    mbtiI_E_question3: 0,
                    mbtiI_E_question4: 1,
                    mbtiI_E_question5: 1,
                    mbtiI_E_question6: 0,
                    mbtiI_E_question7: 0,
                    mbtiJ_P_question15: 1,
                    mbtiJ_P_question16: 0,
                    mbtiJ_P_question17: 0,
                    mbtiJ_P_question18: 0,
                    mbtiJ_P_question19: 1,
                    mbtiJ_P_question20: 1,
                    mbtiJ_P_question21: 1,
                    mbtiS_N_question8: 1,
                    mbtiS_N_question9: 1,
                    mbtiS_N_question10: 0,
                    mbtiS_N_question11: 1,
                    mbtiS_N_question12: 1,
                    mbtiS_N_question13: 1,
                    mbtiS_N_question14: 1,
                    mbtiT_F_question22: 1,
                    mbtiT_F_question23: 0,
                    mbtiT_F_question24: 0,
                    mbtiT_F_question25: 0,
                    mbtiT_F_question26: 1,
                    mbtiT_F_question27: 1,
                    mbtiT_F_question28: 1,
                    mi_question1: 3,
                    mi_question2: 5,
                    mi_question3: 5,
                    mi_question4: 5,
                    mi_question5: 4,
                    mi_question6: 3,
                    mi_question7: 3,
                    mi_question8: 3,
                    mi_question9: 3,
                    mi_question10: 3,
                    mi_question11: 4,
                    mi_question12: 5,
                    mi_question13: 5,
                    mi_question14: 4,
                    mi_question15: 3,
                    mi_question16: 3,
                    mi_question17: 3,
                    mi_question18: 2,
                    mi_question19: 5,
                    mi_question20: 5,
                    mi_question21: 4,
                    mi_question22: 3,
                    mi_question23: 5,
                    mi_question24: 4,
                    mi_question25: 3,
                    mi_question26: 2,
                    mi_question27: 0,
                    mi_question28: 5,
                    mi_question29: 4,
                    mi_question30: 4,
                    mi_question31: 4,
                    mi_question32: 3,
                    mi_question33: 5,
                    mi_question34: 4,
                    mi_question35: 4,
                    mi_question36: 4,
                    options: 1,
                    self_question1: 1,
                    self_question2: 1,



                }
            }, {
                headers: {
                    Authorization: `Token ${tokenValue}`,
                },

            });

            // Handle success response

            const responseData = response.data;
            setSurveyData(responseData);

        }
        catch (error) {
            console.error(error); // Handle error response
        }
    };


    const handleOptionClick = (questionId, optionIndex) => {
        handleAnswer(questionId, optionIndex);
    };

    const isAllQuestionsAnswered = Object.keys(Myanswers).length === questions.length;

    const unansweredQuestions = questions
        .filter((question) => !Myanswers.hasOwnProperty(question.id))
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
                    type="button"
                    onClick={() => handleButtonSelection(0.0)}
                    className={`bg-purple-500 hover:bg-purple-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded ${selectedButton === 0.0 ? 'bg-purple-700' : ''
                        }`}
                >
                    Medical
                </button>

                <button
                    type="button"
                    onClick={() => handleButtonSelection(1.0)}
                    className={`bg-purple-500 hover:bg-purple-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded ${selectedButton === 1.0 ? 'bg-purple-700' : ''
                        }`}
                >
                    Engineering
                </button>

                <button
                    type="button"
                    onClick={() => handleButtonSelection(2.0)}
                    className={`bg-purple-500 hover:bg-purple-700 mt-4 mr-8 mb-8 text-white font-bold py-2 px-4 rounded ${selectedButton === 2.0 ? 'bg-purple-700' : ''
                        }`}
                >
                    Either
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
                                    className={`flex items-center mr-4 mb-2 ${Myanswers[question.id] === optionIndex ? 'text-blue-500 font-bold' : ''
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


                <Link
                    key="submit"
                    to='/History'  >
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        //  disabled={!isAllQuestionsAnswered}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit



                    </button>
                </Link>

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