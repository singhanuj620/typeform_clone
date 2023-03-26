import React, { useEffect, useState } from 'react'
import './Questions.css'
import { questions } from '../../questions'
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../Component/Input/Input'
import Button from '../../Component/Button/Button'
import { setQuestionNumber } from '../../slice/changeScreenSlice';
import { setAnswer } from '../../slice/answerSlice';

const Questions = () => {
    const { questionNumber } = useSelector((state) => state.screen);
    const question = questions.filter(question => question.id === questionNumber)[0];
    const dispatch = useDispatch();

    const [inputField, setInputFiled] = useState("");

    const handleInputResponse = (e) => {
        e.preventDefault();
        setInputFiled(e.target.value);
    }

    const answerJSX = (type) => {
        switch (type) {
            case "input": return <Input placeholder={question.placeholder} handleInputResponse={handleInputResponse} value={inputField} />
            default: return <div></div>
        }
    }

    useEffect(() => {
        const keyDownHandler = event => {

            if (event.key === 'Enter') {
                event.preventDefault();
                handleStoreAnswer();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleStoreAnswer = () => {

        switch (question.type) {
            case "input":
                dispatch(setAnswer({ questionId: question.id, answer: inputField }))
                setInputFiled("")
                break
            default: { }
        }

        // change question
        dispatch(setQuestionNumber({ number: questionNumber + 1 }))
    }

    return (
        <div className='ques'>
            <div className='ques-title'>
                {questionNumber} &nbsp;
                <svg className="svg-ques" viewBox="0 0 20 20">
                    <path fill="none" d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
	l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
	c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
	c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
	S1.293,9.212,1.729,9.212z"></path>
                </svg>
                &nbsp; &nbsp;
                {question.title.text}
                {question.isRequired && ' *'}
            </div>
            <div className="ans">{answerJSX(question.type)}</div>
            <div className="ques-btn">
                <div><Button text={"OK"} onClick={handleStoreAnswer} /></div>
                <div> &nbsp; &nbsp; press <strong>Enter</strong> ↵</div>
            </div>
        </div >
    )
}

export default Questions