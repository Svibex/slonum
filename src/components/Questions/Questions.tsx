import React from "react";
import Question from "../Question/Question";
import "./Questions.css";

const Questions = () => {
    const questions = [
        "Может ли ребёнок заниматься самостоятельно?",
        "Как происходит оплата?",
        "Есть ли гарантии усвоения материала?",
        "С кем будет общаться мой ребёнок?",
        "Каковы принципы обучения?",
        "Сколько раз в неделю можно заниматься?",
    ];

    return (
        <div className="questions">
            <div className="questions__container">
            <h2 className="title questions__title">Вопрос/Ответ</h2>
            {questions.map((el, index) =>
                <Question text={el} key={index}/>)}
            </div>
        </div>
    );
};

export default Questions;