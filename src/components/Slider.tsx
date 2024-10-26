import React, {useRef} from "react";
import {SliderItem} from "./SliderItem";
import {sliderItems} from "../tools/store";
import {SliderItemProps} from "../tools/types";
import ImgArrowL from "../assets/img/arrow-l.png";
import ImgArrowR from "../assets/img/arrow-r.png";

export const Slider: React.FC = () => {

    const sliderRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({left: 460, behavior: "smooth"});
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({left: -460, behavior: "smooth"});
        }
    };

    return (
        <div className="slider">
            <h2 className="slider__title">Галерея карикатур</h2>

            <div className="slider__items" ref={sliderRef}>
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
                <button className="slider__nav-btn" onClick={handlePrev}>
                    <img src={ImgArrowL} alt="arrow-left"/>
                </button>

                <button className="slider__nav-btn" onClick={handleNext}>
                    <img src={ImgArrowR} alt="arrow-right"/>
                </button>
            </div>

        </div>
    );
};
