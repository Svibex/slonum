import React from "react";
import "./Question.css";

const Question = (props: { text: string }) => {
    return (
        <div className="question">
            <p className="question__text">{props.text}</p>
            <button className="question__button">✛</button>
        </div>
    );
};

export default Question;