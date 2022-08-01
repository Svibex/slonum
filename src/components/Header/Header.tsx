import React from "react";
import "./Header.css";

const Header = () => {
    const logo = require("../../assets/image/header/logo.png") as string;

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} alt="Логотип"/>
                    <div className="header__title">
                        <p className="header__title_text1">Слон</p>
                        <p className="header__title_text2">УМ</p>
                    </div>
                </div>
                <button className="header__button">Войти</button>
            </div>
        </header>
    );
};

export default Header;