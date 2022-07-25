import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

const Cards = () => {
    const cards = [
        "Шанс занять 1 место — в вашем городе и по всей России",
        "Развитие самостоятельности + свободное время для родителей ;)",
        "Персональный диплом в разных номинациях каждому участнику",
        "Призы и скидки для подписчиков и авторизованных пользователей",
        "Бесплатный диплом на email — через 1 день после конкурса",
        "Публикация работ победителей во ВКонтакте. Подписывайтесь!",
    ];

    return (
        <div className="cards">
            <div className="cards__container">
                <h2 className="title">Для чего нужно участвовать</h2>
                <div className="cards__list">
                    {cards.map((el, index) =>
                        <Card text={el} id={index + 1} key={index}/>)}
                </div>
            </div>
        </div>
    );
};

export default Cards;