import React, {useState, useRef, useEffect} from "react";
import "./Timer.css";

const Timer = () => {
    const colon = require("../../assets/image/timer/colon.png") as string;
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");

    let interval:{current: NodeJS.Timeout | null} = useRef(null);

    const startTimer = () => {

        const countdownDate = new Date("August 10 2022 00:00:00").getTime();
        console.log(countdownDate)

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = (Math.floor(distance/(1000*60*60*24))).toString();
            const hours = (Math.floor(distance%(1000*60*60*24)/(1000*60*60))).toString();
            const minutes = (Math.floor(distance%(1000*60*60)/(1000*60))).toString();

            if (distance>0) {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
            }

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