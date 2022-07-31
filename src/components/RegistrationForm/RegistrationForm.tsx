import React from "react";
import "./RegistrationForm.css";
import Checkbox from "../Checkbox/Checkbox";

const RegistrationForm = () => {
    const paperAirplane = require("../../assets/image/registrationForm/paperAirplane.png") as string;
    const paperAirplane1 = require("../../assets/image/registrationForm/paperAirplane1.png") as string;
    const paperAirplane2 = require("../../assets/image/registrationForm/paperAirplane2.png") as string;

    return (
        <div className="registrationForm">
            <h2 className="registrationForm__title title">Зарегистрируйтесь, чтобы участвовать</h2>
            <form className="registrationForm__container">
                <input className="registrationForm__input input" type="text" placeholder="ФИО ребёнка"/>
                <input className="registrationForm__input input" type="text" placeholder="Дата рождения"/>
                <input className="registrationForm__input input" type="text" placeholder="Город"/>
                <input className="registrationForm__input input" type="text" placeholder="Email"/>
                <input className="registrationForm__input input" type="text" placeholder="Пароль"/>
                <div className="registrationForm__consent">
                    <Checkbox
                        id="checkbox1"
                        labelClassName="registrationForm__checkboxText"
                        link="registrationForm__link"
                     />
                </div>
                <div className="registrationForm__buttonGroup">
                    <button
                        className="registrationForm__button"
                        type="submit"
                        onClick={(e:React.MouseEvent) => e.preventDefault()}>
                        Участвовать
                    </button>
                    <img id="registrationForm__paperAirplaneActive" src={paperAirplane} alt="Бумажный самолетик"/>
                    <img id="registrationForm__paperAirplaneLeft" src={paperAirplane1} alt="Бумажный самолетик"/>
                    <img id="registrationForm__paperAirplaneRight" src={paperAirplane2} alt="Бумажный самолетик"/>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;