import React from "react";
import "./DiplomaInformation.css";

const DiplomaInformation = () => {
    const diploma = require("../../assets/image/diplomaInformation/diploma.png") as string;

    return (
        <div className="diplomaInformation">
            <div className="diplomaInformation__container">
                <div>
                    <h2 className="title">Выдаём дипломы участникам</h2>
                    <div className="diplomaInformation__blockText">
                        <p>
                            Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а
                            также
                            определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка —
                            дипломы получат все дети!
                        </p>
                        <p>Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса,
                            дополнительно
                            вышлем его на e-mail.
                        </p>
                        <p>
                            Со слоном к победам напролом!
                        </p>
                    </div>
                </div>
                <img src={diploma} alt="Диплом участника"/>
            </div>
        </div>
    );
};

export default DiplomaInformation;