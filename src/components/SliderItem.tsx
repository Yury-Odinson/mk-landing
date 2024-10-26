import React from "react";

interface Props {
    name: string;
    description: string;
    imgSrc: string;
}

export const SliderItem: React.FC<Props> = ({name, description, imgSrc}) => {
    return (
        <div>
            <img src={imgSrc} alt={name} width={42} height={42}/>
            <span>{name}</span>
            <p>{description}</p>
        </div>
    );
};
