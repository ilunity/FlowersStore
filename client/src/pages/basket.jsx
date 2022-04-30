import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InteractionButton from '../components/common/templates/buttonTemplates/InteractionButton';
import Loader from '../components/common/templates/Loader';
import RubleSign from '../components/common/templates/RubleSign';
import SliderBox from '../components/common/slider/SliderBox';
import { paths } from '../utils/routes';
import BasketItem from '../components/common/basketContents/BasketItem';

const Basket = () => {
    const basketItems = useSelector(store => store.basket.basketItems);
    const isLoadingBasketItems = useSelector(store => store.basket.isLoadingBasketItems);
    const sum = useSelector(store => store.basket.totalPrice);

    const showErrorMessage = () => {
        alert('корзина пуста');
    }
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
                                            <BasketItem
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
                                <div className="price-block__general-sum">{sum}<RubleSign/></div>
                            </div>
                            {
                                basketItems.length ?
                                <Link to={paths.ORDER} style={{display:'inline-block', width:'100%'}}>
                                    <InteractionButton value={"Оформить заказ"}/>
                                </Link>
                                :
                                <InteractionButton onClick={showErrorMessage} value={"Оформить заказ"}/>
                            }
                            
                        </div>
                    </div>
                    <SliderBox/>
                </div>
            </div>
        </main>
    );
};

export default Basket;