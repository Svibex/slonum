import React, {useState, useRef, useEffect} from "react";
import "./Timer.css";

const Timer = () => {
    const colon = require("../../assets/image/timer/colon.png") as string;
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");

    let interval: { current: NodeJS.Timeout | null } = useRef(null);

    const nextDay = new Date();
    const tomorrow = new Date(nextDay.getTime() + 2 * (24 * 60 * 60 * 1000));
    const dayTomorrow = tomorrow.getDate();
    const monthTomorrow = tomorrow.getMonth() + 1;
    const yearTomorrow = tomorrow.getFullYear();

    function checkNumber(number: number): string {
        return number < 10 ? `0${number}` : number.toString()
    }

    const startTimer = () => {
        const countdownDate = new Date(`${monthTomorrow} ${dayTomorrow} ${yearTomorrow}`).getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = (Math.floor(distance / (1000 * 60 * 60 * 24)));
            const hours = (Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = (Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)));

            setTimerDays(checkNumber(days));
            setTimerHours(checkNumber(hours));
            setTimerMinutes(checkNumber(minutes));
        }, 1000);
    };

    useEffect(() => {
        startTimer();
    });

    return (
        <div className="timer">
            <div className="timer__block">
                <div className="timer__item">
                    <p className="timer__item_date">{timerDays}</p>
                </div>
                <p className="timer__text">дней</p>
            </div>
            <img className="timer__colon" src={colon} alt="Двоеточие"/>
            <div className="timer__block">
                <div className="timer__item">
                    <p className="timer__item_date">{timerHours}</p>
                </div>
                <p className="timer__text">часов</p>
                <p className="timer__text timer__text_textAccent">по МСК</p>
            </div>
            <img className="timer__colon" src={colon} alt="Двоеточие"/>
            <div className="timer__block">
                <div className="timer__item">
                    <p className="timer__item_date">{timerMinutes}</p>
                </div>
                <p className="timer__text">минут</p>
            </div>
        </div>
    );
};

export default Timer;