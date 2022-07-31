import React from "react";
import "./Subscribe.css";
import Checkbox from "../Checkbox/Checkbox";

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
                        <button
                            className="subscribe__button"
                            type="submit"
                            onClick={(e: React.MouseEvent) => e.preventDefault()}
                        >Отправить
                        </button>
                    </div>
                    <div className="subscribe__consent">
                        <Checkbox
                            id="checkbox2"
                            labelClassName="subscribe__checkboxText"
                            link="subscribe__link"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;