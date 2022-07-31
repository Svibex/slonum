import React from "react";
import "./Card.css";

const Card = ( props: {text: React.ReactElement, id: number} ) => {
    const picture = require(`../../assets/image/card/${props.id}.png`) as string;

    return (
        <div className="card">
            <img src={picture} alt="Иконка" />
            <p className="card__text">
                {props.text}
            </p>
        </div>
    );
};

export default Card;