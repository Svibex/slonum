import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <section className="subscribe">
            <div className="subscribe__container">
                <h2 className="title">Подпишись на рассылку</h2>
                <p>
                    Обещаем присылать только самое важное и интересное :)
                </p>
                <form>
                    <div>
                        <input type="text" placeholder="Email"/>
                        <button type="submit">Отправить</button>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <p>
                            Отправляя данные я соглашаюсь с <a href="/#">Условиями конкурса</a> и <a href="/#">Политикой обработки
                            данных</a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;