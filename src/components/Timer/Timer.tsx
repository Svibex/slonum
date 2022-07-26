import React from "react";
import "./Timer.css";

const Timer = () => {
    const colon = require("../../assets/image/timer/colon.png") as string;

    return (
        <div className="timer">
            <div className="timer__block">
                <div className="timer__item">
                    <p className="timer__item_date">01</p>
                </div>
                <p className="timer__text">дней</p>
            </div>
            <img className="timer__colon" src={colon} alt="Двоеточие"/>
            <div className="timer__block">
                <div className="timer__item">
                    <p className="timer__item_date">09</p>
                </div>
                <p className="timer__text">часов</p>
                <p className="timer__text timer__text_textAccent">по МСК</p>
            </div>
            <img className="timer__colon" src={colon} alt="Двоеточие"/>
            <div className="timer__block">
                <div className="timer__item">
                    <p className="timer__item_date">43</p>
                </div>
                <p className="timer__text">минут</p>
            </div>
        </div>
    );
};

export default Timer;