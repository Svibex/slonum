import React from "react";
import "./AnimatedPlan.css";

const AnimatedPlan = () => {
    const way = require("../../assets/image/animatedPlan/way.png") as string;
    const clouds = require("../../assets/image/animatedPlan/clouds.png") as string;
    const birds = require("../../assets/image/animatedPlan/birds.png") as string;

    return (
        <section className="animatedPlan">
            <div className="animatedPlan__container">
                <h2 className="title">Пошаговый план</h2>
                <img className="animatedPlan__clouds" src={clouds} alt="Облака"/>
                <img className="animatedPlan__birds" src={birds} alt="Птицы"/>
                <img src={way} alt="Путь"/>
                <div className="animatedPlan__point" id="point-1">
                    <div className="animatedPlan__point_number">1</div>
                    <p className="animatedPlan__point_text">Зарегистрируйтесь на конкурс Здесь</p>
                </div>
                <div className="animatedPlan__point" id="point-2">
                    <div className="animatedPlan__point_number">2</div>
                    <p className="animatedPlan__point_text">Выполните все условия конкурса</p>
                </div>
                <div className="animatedPlan__point" id="point-3">
                    <div className="animatedPlan__point_number">3</div>
                    <p className="animatedPlan__point_text">Загрузите рисунок Здесь или в Личном кабинете</p>
                </div>
            </div>
        </section>
    );
};

export default AnimatedPlan;