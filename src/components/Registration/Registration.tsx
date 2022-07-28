import React from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import "./Registration.css";

const Registration = () => {
    const bookmark = require("../../assets/image/registration/bookmark.png") as string;

    return (
        <section className="registration">
            <div className="registration__container">
                <div className="registration__banner">
                    <img className="registration__bookmark" src={bookmark} alt="Скидка за репост"/>
                    <div className="registration__info">
                        <p className="registration__info_text">
                            Стоимость участия:
                        </p>
                        <div className="registration__price">
                            <p className="registration__price_sale">
                                149₽
                            </p>
                            <p className="registration__price_withoutSale">
                                299₽
                            </p>
                        </div>
                        <p className="registration__info_text">
                            При наличии репоста в соцсетях :)
                        </p>
                    </div>
                    <div className="registration__socialMedias">
                        <p className="registration__socialMedias_text">
                            Получить скидку:
                        </p>
                        <div className="registration__icons">
                            <div
                                className="registration__icons_icon"
                                id="registration__vk"
                            />
                            <div
                                className="registration__icons_icon"
                                id="registration__ok"
                            />
                        </div>
                    </div>
                </div>
                <RegistrationForm/>
            </div>
        </section>
    );
};

export default Registration;