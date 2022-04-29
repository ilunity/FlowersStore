import React from 'react';
import InteractionButton from '../templates/buttonTemplates/InteractionButton';
import { InputFrame } from '../templates/InputFrame';
import RubleSign from '../templates/RubleSign';

const FinalPriceCard = ({sum = 0}) => {
  return (
    <div className="order__total-price total-price">
        <div className="total-price__card card-price">
            <div className="card-price__title">Ваш заказ</div>
            <div className="total-price__general-sum general-sum">
                <div className="general-sum__title">Всего</div>
                <div className="general-sum__price">{sum}<RubleSign/></div>
            </div>
            <InteractionButton className={'card-price__btn'} value={'Оформить заказ'}/>
        </div>
        <div className="total-price__bunus">
            <InputFrame className={"total-price__input"} placeholder={'Купон'}/>
            <InputFrame className={"total-price__input"} placeholder={'Подарочный сертификат'}/>
            <InteractionButton className={'total-price__btn'} value={'Применить'}/>
        </div>
    </div>
  );
};

export default FinalPriceCard;