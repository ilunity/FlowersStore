import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import InteractionButton from '../components/common/templates/buttonTemplates/InteractionButton';
import RubleSign from '../components/common/templates/RubleSign';
import SliderBox from '../components/common/slider/SliderBox';
import {paths} from '../utils/routes';
import BasketItems from '../components/common/basketContents/BasketItems';
import BasketTotalSum from '../components/common/basketContents/BasketTotalSum';

const Basket = () => {
    
    return (
        <main className='main'>
            <div className="main__basket basket">
                <div className="basket__container container">
                    <div className="basket__title title">Корзина</div>
                    <div className="basket__body">
                        <BasketItems/>
                        <BasketTotalSum/>
                    </div>
                    <SliderBox/>
                </div>
            </div>
        </main>
    );
};

export default Basket;