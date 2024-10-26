import React from "react";
import {SliderItemProps} from "../tools/types";

export const SliderItem: React.FC<SliderItemProps> = ({name, description, imgSrc, id}) => {
    return (
        <div className="slider__item" id={"sl-item__" + id}>
            <div className="slider__item-chip">
                <span>карикатура</span>
            </div>
            <img className="slider__item-img" src={imgSrc} alt={name} />
            <h3 className="slider__item-title">{name}</h3>
            <p className="slider__item-description">{description}</p>
        </div>
    );
};
