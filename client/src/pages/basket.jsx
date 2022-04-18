import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InteractionButton from '../components/common/buttonTemplates/InteractionButton';
import ItemBasket from '../components/common/ItemBasket';
import SliderBox from '../components/common/slider/SliderBox';
import { deleteFromBasket, getAll } from '../http/basketAPI';
import { setItemBaske } from '../store/actions';

const Basket = () => {
    const dispatch = useDispatch();
    

    // const getCartContents = async () => {
    //     const result = await getAll();
    //     if (result != undefined) {
    //         dispatch(setItemBaske(result));
    //     }
    // };
    // useEffect(async () => {
    //     await getCartContents();
    // }, []);
    // const basketItems = useSelector(store => store.basket);
    
    return (
        <main className='main'>
            <div className="'main__basket basket">
                <div className="basket__container container">
                    <div className="basket__title">Корзина</div>
                    <div className="basket__body">
                        <div className="basket__list-block list-block">
                            <div className="list-block__column-names column-names">
                                <div className="column-names__item column-names__item-name">Название</div>
                                <div className="column-names__item column-names__item-price">Цена за шт.</div>
                                <div className="column-names__item column-names__item-num">Кол-во</div>
                                <div className="column-names__item column-names__item-general">Итог</div>
                            </div>
                            {
                                basketItems.length > 0 ?
                                <div className="list-block__items">
                                {
                                    basketItems.map((item) => {
                                        return (
                                            <ItemBasket
                                                img={item.img} 
                                                name={item.name} 
                                                count={item.count} 
                                                price={item.price} 
                                                key={item.id}
                                                item = {item}
                                            />
                                        )
                                    })
                                }
                                </div>
                                :
                                <div>Корзина пуста</div>
                            }
                        </div>
                        <div className="basket__price-block price-block">
                            <div className="price-block__title">Ваш заказ</div>
                            <div className="price-block__general">
                                <div className="price-block__general-text">Всего</div>
                                <div className="price-block__general-sum">2143</div>
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