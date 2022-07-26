import React from "react";
import Header from "../Header/Header";
import Timer from "../Timer/Timer";
import "./Cover.css";
import AnimatedSpace from "../AnimatedSpace/AnimatedSpace";

const Cover = () => {

    return (
        <section className="cover">
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
                <AnimatedSpace/>
            </div>
        </section>
    );
};

export default Cover;