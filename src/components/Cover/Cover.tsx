import React from "react";
import Header from "../Header/Header";
import Timer from "../Timer/Timer";
import "./Cover.css";

const Cover = () => {
    const space = require("../../assets/image/cover/space.png") as string;
    const girl = require("../../assets/image/cover/girl.png") as string;
    const paperAirplanes = require("../../assets/image/common/paperAirplanes.png") as string;

    return (
        <div className="cover">
            <div className="cover__container">
                <Header />
                <div className="cover__textGroup">
                    <p className="cover__info">От компании СлонУМ</p>
                    <h1 className="cover__title">Всероссийский конкурс
                        Детского рисунка</h1>
                    <p className="cover__text">Участвуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех
                        возрастов</p>
                    <div className="cover__timerGroup">
                        <button className="cover__button">Участвовать</button>
                        <Timer />
                    </div>
                </div>
                <div className="cover__imgGroup">
                    <img className="cover__space" src={space} alt="Космос"/>
                    <img className="cover__girl" src={girl} alt="Девочка"/>
                    <img className="cover__paperAirplanes" src={paperAirplanes} alt="Бумажные самолетики"/>
                </div>
            </div>
        </div>
    );
};

export default Cover;