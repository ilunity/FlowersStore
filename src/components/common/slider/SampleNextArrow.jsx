import React from 'react';
import arrowRight from "../../../img/icons/arrow-right.svg";

const SampleNextArrow = ({onClick}) => {
    return (
        <div onClick={onClick} className="slider__switch slider__switch_arrow-right">
            <img src={arrowRight} alt="arrowRight"/>
        </div>
    );
};

export default SampleNextArrow;