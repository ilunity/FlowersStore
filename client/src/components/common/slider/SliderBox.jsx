import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ItemCard} from "../itemCard/ItemCard";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';
import { getItems } from '../../../http/itemsAPI';
const SliderBox = ({title = "Популярные товары"}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const [itemsSlider, setItemsSlider] = useState([]);

    const loadItems = async () => {
        const countedItems = await getItems(12, 1, 2);
        setItemsSlider(countedItems.items);
    };

    useEffect(async () => {
        await loadItems();
    }, []);
  return (
    <div className='slider'>
      <div className='slider__litle'>{title}</div>
      
        <Slider {...settings}>
          {itemsSlider.map((item) => {
            return (
                <ItemCard
                    key={item.id}
                    item={item}
                />
            );
        })}
        </Slider>
    </div>
  );
};

export default SliderBox;