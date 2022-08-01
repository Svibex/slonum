import React from "react";
import "./Footer.css";

const Footer = () => {
    const tlg = require("../../assets/image/footer/tlg.png") as string;
    const dzen = require("../../assets/image/footer/dzen.png") as string;
    const vk = require("../../assets/image/common/vk.png") as string;
    const arrow = require("../../assets/image/footer/arrow.png") as string;

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__informationBlock">
                    <div className="footer__socialMedias">
                        <p className="footer__text">
                            Наши соцсети:
                        </p>
                        <ul className="footer__icons">
                            <li>
                                <img src={tlg} alt="Телеграм"/>
                            </li>
                            <li>
                                <img src={dzen} alt="Яндекс Дзен"/>
                            </li>
                            <li>
                                <img src={vk} alt="Вконтакте"/>
                            </li>
                        </ul>
                    </div>
                    <ul className="footer__navigation">
                        <li>Главная</li>
                        <li>Личный кабинет</li>
                        <li>Контакты</li>
                        <li>Конфиденциальность</li>
                    </ul>
                    <div className="footer__more">
                        <p className="footer__text">Наши соцсети:</p>
                        <button className="footer__button">
                            <img src={arrow} alt="Стрелочка"/>
                        </button>
                    </div>
                </div>
                <p className="footer__copyright">@ Все права защищены. ООО”Слонум” 2022</p>
            </div>
        </footer>
    );
};

export default Footer;