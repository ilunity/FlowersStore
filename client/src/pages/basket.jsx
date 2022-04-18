import React, { useEffect, useState } from 'react';
import InteractionButton from '../components/common/buttonTemplates/InteractionButton';
import ItemBasket from '../components/common/ItemBasket';
import SliderBox from '../components/common/slider/SliderBox';
import { getAll } from '../http/basketAPI';

const Basket = () => {
    const [cartContents, setCartContents] = useState([{
        count: 3,
        createdAt: "2022-04-13T13:50:12.241Z",
        id: 1,
        img: "6bd38e09-560c-49ba-948c-9506ce1d38d0.jpg",
        name: "101 красная роза",
        price: 9900,
        updatedAt: "2022-04-13T13:50:12.241Z",
    }]);

    const removeItemBasket = async (elem) => {
        cartContents.filter(item => item.id != elem.id);
        await deleteFromBasket(elem.id);
        setCartContents(cartContents);
    }

    const getCartContents = async () => {
        const result = await getAll();
        if (result != undefined) {
            setCartContents(result);
        }
        console.log(result);
    };
    useEffect(async () => {
        await getCartContents();
    }, []);

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
                            <div className="list-block__items">
                                {
                                    cartContents.map((item) => {
                                        return (
                                            <ItemBasket
                                                img={item.img} 
                                                name={item.name} 
                                                count={item.count} 
                                                price={item.price} 
                                                key={item.id}
                                                removeItemBasket = {removeItemBasket}
                                            />
                                        )
                                    })
                                }
                            </div>
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