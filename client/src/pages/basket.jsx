import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InteractionButton from '../components/common/buttonTemplates/InteractionButton';
import ItemBasket from '../components/common/ItemBasket';
import Loader from '../components/common/Loader';
import SliderBox from '../components/common/slider/SliderBox';
import {getAll} from '../http/basketAPI';
import {setItemBasket} from '../store/actions';

const Basket = () => {
    const dispatch = useDispatch();

    const basketItems = useSelector(store => store.basket);
    const isAuth = useSelector(store => store.isAuth);

    const [isLoadingBasketItems, setIsLoadingBasketItems] = useState(true);


    const getAllCartItems = async () => {
        try {
            const countedItems = await getAll();
            dispatch(setItemBasket(countedItems.items));
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoadingBasketItems(false);
        }
    };

    useEffect(async () => {
        await getAllCartItems();
    }, [isAuth]);

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
                                    basketItems.map((item) => {
                                        return (
                                            <ItemBasket
                                                key={item.id}
                                                item = {item}
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
                                <div className="price-block__general-sum">{}</div>
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