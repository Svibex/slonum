import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
    const paperAirplanes = require("../../assets/image/common/paperAirplanes.png") as string;

    return (
        <div className="registrationForm">
            <h2 className="title">Зарегистрируйтесь, чтобы участвовать</h2>
            <form className="registrationForm__container">
                <input type="text" placeholder="ФИО ребёнка"/>
                <input type="text" placeholder="Дата рождения"/>
                <input type="text" placeholder="Город"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Пароль"/>
                <div>
                    <input type="checkbox"/>
                    <p>
                        Отправляя данные я соглашаюсь с
                        <a href="#">Условиями конкурса</a> и <a href="#">Политикой обработки данных</a>
                    </p>
                    <div>
                        <button type="submit">
                            Участвовать
                        </button>
                        <img src={paperAirplanes} alt="Бумажные самолетики"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;