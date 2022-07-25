import React from "react";
import "./Description.css";

const Description = () => {
    return (
        <div className="description">
            <p className="description__text">
                Компания <b>СлонУм</b> – проводит конкурс для детей,
                в котором могут участвовать ребята
                <b className="description__text_accent"> всех возрастов! </b>
                Номинации, в которых можно победить, есть возможность
                проявить себя во всех направлениях и даже
                <b className="description__text_accent"> без художественных способностей.</b>
            </p>
        </div>
    );
};

export default Description;