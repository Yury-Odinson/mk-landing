import React from "react";
import HeaderLogo from "../assets/img/mk-logo 2.png";

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <img src={HeaderLogo} alt="logo" />
                <h1 className="footer__title">Концепция: АО«Редакция газеты «Московский Комсомолец» © 2024. MK.RU</h1>
            </div>
        </footer>
    );
};
