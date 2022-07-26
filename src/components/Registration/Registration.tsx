import React from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import "./Registration.css";

const Registration = () => {
    const bookmark = require("../../assets/image/registration/bookmark.png") as string;
    const vk = require("../../assets/image/common/vk.png") as string;
    const ok = require("../../assets/image/registration/ok.png") as string;

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
                        <p className="registration__socialMedias_text">Получить скидку:</p>
                        <div className="registration__icons">
                            <img className="registration__icons_icon" src={vk} alt="Вконтакте"/>
                            <img className="registration__icons_icon" src={ok} alt="Одноклассники"/>
                        </div>
                    </div>
                </div>
                <RegistrationForm/>
            </div>
        </section>
    );
};

export default Registration;