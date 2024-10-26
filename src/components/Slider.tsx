import React from "react";
import {SliderItem} from "./SliderItem";
import {sliderItems} from "../tools/store";
import {SliderItemProps} from "../tools/types";
import ImgArrowL from "../assets/img/arrow-l.png";
import ImgArrowR from "../assets/img/arrow-r.png";

export const Slider: React.FC = () => {
    return (
        <div className="slider">
            <h2 className="slider__title">Галерея карикатур</h2>

            <div className="slider__items">
                {sliderItems?.map((item: SliderItemProps) => (
                    <SliderItem
                        name={item.name}
                        description={item.description}
                        imgSrc={item.imgSrc}
                        id={item.id}
                        key={item.id}
                    />
                ))}
            </div>

            <div className="slider__nav">
                <button className="slider__nav-btn">
                    <img src={ImgArrowL} alt="arrow-left"/>
                </button>

                <button className="slider__nav-btn">
                    <img src={ImgArrowR} alt="arrow-right"/>
                </button>
            </div>

        </div>
    );
};
