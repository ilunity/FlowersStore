import React from 'react';
import InteractionButton from '../components/common/buttonTemplates/InteractionButton';
import SliderBox from '../components/common/slider/SliderBox';
const Basket = () => {
    return (
        <main className='main'>
            <div className="'main__basket basket">
                <div className="basket__container container">
                    <div className="basket__title">Корзина</div>
                    <div className="basket__body">
                        <div className="basket__list-block list-block">
                            <div className="list-block__column-names column-names">
                                <div className="column-names__item">Название</div>
                                <div className="column-names__item">Цена за шт.</div>
                                <div className="column-names__item">Кол-во</div>
                                <div className="column-names__item">Итог</div>
                            </div>
                            <div className="list-block__items">
                                <div className="list-block__item item-basket">
                                    <div className="item-basket__img"></div>
                                    <div className="item-basket__name"></div>
                                    <div className="item-basket__cunter"></div>
                                    <div className="item-basket__price"></div>
                                    <div className="item-basket__delet-icon"></div>
                                    <div className="item-basket__like-icon"></div>
                                </div>
                                <div className="list-block__item item-basket">2</div>
                                <div className="list-block__item item-basket">3</div>
                                <div className="list-block__item item-basket">4</div>
                                {/* <div className="list-block__item item-basket">5</div>
                                <div className="list-block__item item-basket">5</div>
                                <div className="list-block__item item-basket">5</div>
                                <div className="list-block__item item-basket">5</div> */}
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