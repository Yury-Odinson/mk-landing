import React, {useState} from "react";
import ImgForm from "../assets/img/form-img.png";

export const SubscriptionForm: React.FC = () => {

    const [fio, setFio] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [offer, setOffer] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    const [fioError, setFioError] = useState<boolean | null>(null);
    const [emailError, setEmailError] = useState<boolean | null>(null);
    const [offerError, setOfferError] = useState<boolean | null>(null);


    const checkValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        fio === "" ? setFioError(true) : setFioError(false);
        emailRegex.test(email) ? setEmailError(false) : setEmailError(true);
        offer ? setOfferError(false) : setOfferError(true);

        if (fio !== "" && emailRegex.test(email) && offer) {
            setIsValid(true);
        } else {
            setIsValid(false)
        }

    };

    const handlerSubmit = () => {
        checkValid();
        if (isValid) {
            const data = {
                fullName: fio,
                eMail: email,
                comment: comment
            }
            // здесь можно добавить логику на отправку в API, а пока просто вывод в консоль
            console.log(JSON.stringify(data));
        }
    }

    return (
        <form className="form">
            <span className="form__border"/>
            <div className="form__content">

                <div className="form__background">
                    <img src={ImgForm} alt="form" className="form__background-img"/>
                    <div className="form__background-text">
                    <span className="form__background-title">Комета из каменного века <br/>
                        максимально приблизилась к Земле</span>
                        <span className="form__background-description">
                            Последними это небесное тело видели неандертальцы
                        </span>
                    </div>
                </div>

                <div className="form__data">
                    <h4 className="form__data-title">Подпишитесь на рассылку</h4>

                    <div className="form__data-container">

                        <label className="form__data-label">
                            <input
                                className="form__data-input"
                                type="text"
                                placeholder="ФИО"
                                onChange={(e) => setFio(e.target.value)}
                                required
                            />
                            {fioError && <span className="input-error">Поле заполнено не корректно. </span>}
                        </label>

                        <label className="form__data-label">
                            <input
                                className="form__data-input"
                                type="text"
                                placeholder="E-mail"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {emailError && <span className="input-error">Поле заполнено не корректно. </span>}
                        </label>

                        <label>
                            <textarea
                                className="form__data-comment"
                                placeholder="Примечание"
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </label>

                        <label className="custom-checkbox">
                            <input
                                className="default-checkbox"
                                type="checkbox"
                                checked={offer}
                                onChange={() => setOffer(!offer)}
                            />
                            <div className="checkbox"/>
                            <span className={offerError ? "error-clr form__data-offer-txt" : "form__data-offer-txt"}>Я даю согласие на обработку персональных данных в
                                соответсвии с <a href="./">политикой обработки персональных данных.</a>
                            </span>
                        </label>

                        <button className="form__data-btn" type={isValid ? "submit" : "button"}
                                onClick={handlerSubmit}>ПОДПИСАТЬСЯ
                        </button>
                    </div>

                </div>

            </div>
        </form>
    );
};
