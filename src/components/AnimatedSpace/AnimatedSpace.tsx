import React from "react";
import "./AnimatedSpace.css";

const AnimatedSpace = () => {
    const girl = require("../../assets/image/animatedSpace/girl.png") as string;
    const paperAirplanes = require("../../assets/image/common/paperAirplanes.png") as string;

    return (
        <div className="animatedSpace">
            <img className="animatedSpace__girl" src={girl} alt="Девочка"/>
            <img className="animatedSpace__paperAirplanes" src={paperAirplanes} alt="Бумажные самолетики"/>
        </div>
    );
};

export default AnimatedSpace;