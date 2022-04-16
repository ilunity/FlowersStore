import React from 'react';
import { ItemsWrapper } from '../itemCard/itemsWrapper';
import arrowRight from "../../../img/icons/arrow-right.svg";
import arrowLeft from "../../../img/icons/arrow-left.svg";
const SliderBox = ({title = "Популярные товары", itemsCard}) => {
  return (
    <div className='slider'>
      <div className='slider__litle'>{title}</div>
      <div className="slider__switch slider__switch_arrow-right">
        <img src={arrowRight} alt="arrow right" />
      </div>
      <div className="slider__switch slider__switch_arrow-left">
        <img src={arrowLeft} alt="arrow left" />
      </div>
      <ItemsWrapper filters={2} helperClass = {"home-slider"}/>
    </div>
  );
};

export default SliderBox;