import React from "react";
import {SliderItem} from "./SliderItem";

export const Slider: React.FC = () => {
    return (
        <div>
            <span>slider</span>
            <SliderItem name="slider item 1" description="description slider item 1" imgSrc="./"/>
        </div>
    );
};
