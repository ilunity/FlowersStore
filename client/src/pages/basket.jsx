import React from 'react';
import InteractionButton from '../components/common/buttonTemplates/InteractionButton';

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
                                <div className="list-block__item">1</div>
                                <div className="list-block__item">2</div>
                                <div className="list-block__item">3</div>
                                <div className="list-block__item">4</div>
                            </div>
                        </div>
                        
                        <div className="basket__price-block price-block">
                            <div className="price-block__title">Ваш заказ</div>
                            <div className="price-block__general">
                                <div className="price-block__general-text">Всего</div>
                                <div className="price-block__general-sum"></div>
                            </div>
                            <InteractionButton/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Basket;