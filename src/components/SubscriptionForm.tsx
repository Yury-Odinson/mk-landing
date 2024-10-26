import React from "react";
import ImgForm from "../assets/img/form-img.png";

export const SubscriptionForm: React.FC = () => {
    return (
        <form className="form">
            <span className="form__border"/>
            <div className="form__content">

                <div className="form__background">
                    <img src={ImgForm} alt="form" className="form__background-img"/>
                    <div className="form__background-text">
                    <span
                        className="form__background-title">Комета из каменного века <br/> максимально приблизилась к Земле</span>
                        <span
                            className="form__background-description">Последними это небесное тело видели неандертальцы</span>
                    </div>
                </div>

                <div className="form__data">
                    <h4 className="form__data-title">Подпишитесь на рассылку</h4>

                    <div className="form__data-container">
                        <label>
                            <input className="form__data-input" type="text" placeholder="ФИО"/>
                        </label>
                        <label>
                            <input className="form__data-input" type="email" placeholder="E-mail"/>
                        </label>
                        <label>
                            <textarea className="form__data-comment" placeholder="Примечание"/>
                        </label>

                        <label className="custom-checkbox">
                            <input className="default-checkbox" type="checkbox"/>
                            <div className="checkbox"/>
                            <span className="form__data-offer-txt">Я даю согласие на обработку персональных данных в соответсвии с <a
                                href="./">политикой обработки персональных данных.</a>
                            </span>
                        </label>
                        
                        <button className="form__data-btn" type="button">ПОДПИСАТЬСЯ</button>
                    </div>

                </div>

            </div>
        </form>
    );
};
