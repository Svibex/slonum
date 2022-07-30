import React from "react";
import "./AnimatedSpace.css";

const AnimatedSpace = () => {
    const girl = require("../../assets/image/animatedSpace/girl.png") as string;
    const paperAirplanes = require("../../assets/image/common/paperAirplanes.png") as string;
    const brush = require("../../assets/image/animatedSpace/brush.png") as string;
    const alarm = require("../../assets/image/animatedSpace/alarm.png") as string;
    const atom = require("../../assets/image/animatedSpace/atom.png") as string;
    const balloon = require("../../assets/image/animatedSpace/balloon.png") as string;
    const division = require("../../assets/image/animatedSpace/division.png") as string;
    const elephant = require("../../assets/image/animatedSpace/elephant.png") as string;
    const lamp = require("../../assets/image/animatedSpace/lamp.png") as string;
    const one = require("../../assets/image/animatedSpace/one.png") as string;
    const palette = require("../../assets/image/animatedSpace/palette.png") as string;
    const plane = require("../../assets/image/animatedSpace/plane.png") as string;
    const planet1 = require("../../assets/image/animatedSpace/planet1.png") as string;
    const planet2 = require("../../assets/image/animatedSpace/planet2.png") as string;
    const planet3 = require("../../assets/image/animatedSpace/planet3.png") as string;
    const plus = require("../../assets/image/animatedSpace/plus.png") as string;
    const rocket = require("../../assets/image/animatedSpace/rocket.png") as string;
    const star = require("../../assets/image/animatedSpace/star.png") as string;
    const zero = require("../../assets/image/animatedSpace/zero.png") as string;

    return (
        <div className="animatedSpace">
            <div className="animatedSpace__background" />
            <img className="animatedSpace__girl" src={girl} alt="Девочка"/>
            <img className="animatedSpace__paperAirplanes" src={paperAirplanes} alt="Бумажные самолетики"/>

            <img className="animatedSpace__brush" src={brush} alt="Девочка"/>
            <img className="animatedSpace__alarm" src={alarm} alt="Девочка"/>
            <img className="animatedSpace__atom" src={atom} alt="Девочка"/>
            <img className="animatedSpace__balloon" src={balloon} alt="Девочка"/>
            <img className="animatedSpace__division" src={division} alt="Девочка"/>
            <img className="animatedSpace__elephant" src={elephant} alt="Девочка"/>
            <img className="animatedSpace__lamp" src={lamp} alt="Девочка"/>
            <img className="animatedSpace__one" src={one} alt="Девочка"/>
            <img className="animatedSpace__palette" src={palette} alt="Девочка"/>
            <img className="animatedSpace__plane" src={plane} alt="Девочка"/>
            <img className="animatedSpace__planet1" src={planet1} alt="Девочка"/>
            <img className="animatedSpace__planet2" src={planet2} alt="Девочка"/>
            <img className="animatedSpace__planet3" src={planet3} alt="Девочка"/>
            <img className="animatedSpace__plus" src={plus} alt="Девочка"/>
            <img className="animatedSpace__rocket" src={rocket} alt="Девочка"/>
            <img className="animatedSpace__star" src={star} alt="Девочка"/>
            <img className="animatedSpace__zero" src={zero} alt="Девочка"/>
        </div>
    );
};

export default AnimatedSpace;