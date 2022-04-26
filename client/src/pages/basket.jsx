import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InteractionButton from '../components/common/buttonTemplates/InteractionButton';
import ItemBasket from '../components/common/ItemBasket';
import Loader from '../components/common/Loader';
import SliderBox from '../components/common/slider/SliderBox';

const Basket = () => {
    const basketItems = useSelector(store => store.basket.basketItems);
    const isLoadingBasketItems = useSelector(store => store.basket.isLoadingBasketItems);
    const sum = useSelector(store => store.basket.totalPrice);
    return (
        <main className='main'>
            <div className="main__basket basket">
                <div className="basket__container container">
                    <div className="basket__title title">Корзина</div>
                    <div className="basket__body">
                        <div className="basket__list-block list-block">
                            <div className="list-block__column-names column-names">
                                <div className="column-names__item column-names__item-name">Название</div>
                                <div className="column-names__item column-names__item-price">Цена за шт.</div>
                                <div className="column-names__item column-names__item-num">Кол-во</div>
                                <div className="column-names__item column-names__item-general">Итог</div>
                            </div>
                            {isLoadingBasketItems && <Loader/>}
                            {
                                basketItems.length ?
                                <div className="list-block__items">
                                {
                                    basketItems.map((basketItem) => {
                                        return (
                                            <ItemBasket
                                                key={basketItem.item.id}
                                                item = {basketItem.item}
                                                basketCount={basketItem.basketCount}
                                            />
                                        )
                                    })
                                }
                                </div>
                                : 
                                isLoadingBasketItems ? null
                                :
                                <div className='list-block__no-items'>Корзина пуста</div>
                            }
                        </div>
                        <div className="basket__price-block price-block">
                            <div className="price-block__title">Ваш заказ</div>
                            <div className="price-block__general">
                                <div className="price-block__general-text">Всего</div>
                                <div className="price-block__general-sum">{sum} rub</div>
                            </div>
                            <InteractionButton value={"Оформить заказ"}/>
                        </div>
                    </div>
                    <SliderBox/>
                </div>
            </div>
        </main>
    );
};

export default Basket;