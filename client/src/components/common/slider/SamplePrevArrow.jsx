import React from 'react';
import arrowLeft from "../../../img/icons/arrow-left.svg";

const SamplePrevArrow = ({onClick}) => {
    return (
        <div onClick={onClick} className="slider__switch slider__switch_arrow-left">
            <img src={arrowLeft} alt="arrowLeft"/>
        </div>
    );
};

export default SamplePrevArrow;