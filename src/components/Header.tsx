import React from "react";
import HeaderLogo from "../assets/img/mk-logo 2.png";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <img src={HeaderLogo} alt="logo" />
                <h1 className="header__title">Тестовое задание ИД Московский Комсомолец</h1>
            </div>
        </header>
    );
};
