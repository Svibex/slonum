import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <section className="subscribe">
            <div className="subscribe__container">
                <h2 className="title" id="subscribe__title">Подпишись на нашу рассылку</h2>
                <p className="subscribe__text">
                    Обещаем присылать только самое важное и интересное <b>:)</b>
                </p>
                <form className="subscribe__form">
                    <div className="subscribe__inputGroup">
                        <input className="input" type="text" placeholder="Email"/>
                        <button className="subscribe__button" type="submit">Отправить</button>
                    </div>
                    <div className="subscribe__consent">
                        <button className="checkbox"/>
                        <p className="subscribe__checkboxText">
                            Отправляя данные я соглашаюсь с
                            <a className="subscribe__link" href="/#"> Условиями конкурса</a> и
                            <a className="subscribe__link" href="/#"> Политикой обработки данных</a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;