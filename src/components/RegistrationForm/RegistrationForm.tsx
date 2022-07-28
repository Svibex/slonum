import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
    const paperAirplanes = require("../../assets/image/common/paperAirplanes.png") as string;

    return (
        <div className="registrationForm">
            <h2 className="registrationForm__title title">Зарегистрируйтесь, чтобы участвовать</h2>
            <form className="registrationForm__container">
                <input className="registrationForm__input" type="text" placeholder="ФИО ребёнка"/>
                <input className="registrationForm__input" type="text" placeholder="Дата рождения"/>
                <input className="registrationForm__input" type="text" placeholder="Город"/>
                <input className="registrationForm__input" type="text" placeholder="Email"/>
                <input className="registrationForm__input" type="text" placeholder="Пароль"/>
                <div className="registrationForm__consent">
                    <button className="registrationForm__checkbox"/>
                    <p className="registrationForm__text">
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
                    <button className="registrationForm__button" type="submit">
                        Участвовать
                    </button>
                    <img className="registrationForm__paperAirplanes" src={paperAirplanes} alt="Бумажные самолетики"/>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;