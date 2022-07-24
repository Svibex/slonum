import React from "react";
import "./Header.css";

const Header = () => {
    const logo = require("../../images/header/logo.png") as string;

    return (
        <header className="header">
            <div className="header__container">
                <div className="header_logo">
                    <img src={logo} alt="logo"/>
                    <div className="header__title">
                        <p className="header__title-text1">Слон</p>
                        <p className="header__title-text2">УМ</p>
                    </div>
                </div>
                <button>Войти</button>
            </div>
        </header>
    );
};

export default Header;