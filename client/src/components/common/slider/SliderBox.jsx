import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ItemCard} from "../itemCard/ItemCard";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';
import {getItems} from '../../../http/itemsAPI';

const SliderBox = ({title = "Популярные товары"}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 5,
        slidesToShow: 5,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1126,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 745,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
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
            <div className='slider__wrapper'>
                <Slider {...settings}>
                    {itemsSlider.map((item) => {
                        return (
                            <ItemCard
                                className={'slider__item'}
                                key={item.id}
                                item={item}
                            />
                        );
                    })}
                </Slider>
            </div>

        </div>
    );
};

export default SliderBox;