import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
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
                    <button className="checkbox"/>
                    <p className="registrationForm__checkboxText">
                        Отправляя данные я соглашаюсь с&nbsp;
                        <a className="registrationForm__link" href="/#">
                            Условиями конкурса
                        </a> и&nbsp;
                        <a className="registrationForm__link" href="/#">
                            Политикой обработки данных
                        </a>
                    </p>
                </div>
                <div className="registrationForm__buttonGroup">
                    <button
                        className="registrationForm__button"
                        type="submit"
                        onClick={(e:React.MouseEvent) => e.preventDefault()}>
                        Участвовать
                    </button>
                    <img className="registrationForm__paperAirplanes" src={paperAirplane1} alt="Бумажные самолетики"/>
                    <img className="registrationForm__paperAirplanes" src={paperAirplane2} alt="Бумажные самолетики"/>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;