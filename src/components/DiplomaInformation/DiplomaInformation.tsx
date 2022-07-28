import React from "react";
import "./DiplomaInformation.css";

const DiplomaInformation = () => {
    const diploma = require("../../assets/image/diplomaInformation/diploma.png") as string;

    return (
        <section className="diplomaInformation">
            <div className="diplomaInformation__container">
                <div className="diplomaInformation__blockInfo">
                    <h2 className="diplomaInformation__title title">Выдаём <span>дипломы</span> участникам</h2>
                    <div className="diplomaInformation__blockText">
                        <p className="diplomaInformation__blockText_text">
                            Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а
                            также
                            определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка —
                            дипломы получат все дети!
                        </p>
                        <p className="diplomaInformation__blockText_text">Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса,
                            дополнительно
                            вышлем его на e-mail.
                        </p>
                        <p className="diplomaInformation__blockText_text">
                            Со слоном к победам напролом!
                        </p>
                    </div>
                </div>
                <img className="diplomaInformation__diploma" src={diploma} alt="Диплом участника"/>
            </div>
        </section>
    );
};

export default DiplomaInformation;