import React, {useState, useEffect} from "react";
import "./Timer.css";

const Timer = () => {
    const colon = require("../../assets/image/timer/colon.png") as string;

    const tomorrow = new Date(new Date().getTime() + 2 * (24 * 60 * 60 * 1000)),
        dayTomorrow = tomorrow.getDate(),
        monthTomorrow = tomorrow.getMonth() + 1,
        yearTomorrow = tomorrow.getFullYear(),
        now = new Date().getTime(),
        countdownDate = new Date(`${monthTomorrow} ${dayTomorrow} ${yearTomorrow}`).getTime(),
        distance = countdownDate - now,
        days = checkNumber(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours = checkNumber(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))),
        minutes = checkNumber(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))),
        [timer, setTimer] = useState({days, hours, minutes})

    function checkNumber(number: number): string {
        return number < 10 ? `0${number}` : number.toString();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(() => ({days, hours, minutes}));
        }, 1000);
        return () => clearInterval(interval)
    }, [timer]);

    return (
        <div className="timer">
            <div className="timer__block">
                <div className="timer__item">
                    <p className="timer__item_date">{timer.days}</p>
                </div>
                <p className="timer__text">дней</p>
            </div>
            <img className="timer__colon" src={colon} alt="Двоеточие"/>
            <div className="timer__block">
                <div className="timer__item">
                    <p className="timer__item_date">{timer.hours}</p>
                </div>
                <p className="timer__text">часов</p>
                <p className="timer__text timer__text_textAccent">по МСК</p>
            </div>
            <img className="timer__colon" src={colon} alt="Двоеточие"/>
            <div className="timer__block">
                <div className="timer__item">
                    <p className="timer__item_date">{timer.minutes}</p>
                </div>
                <p className="timer__text">минут</p>
            </div>
        </div>
    );
};

export default Timer;