import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FinalPriceCard from '../components/common/orderContents/FinalPriceCard';
import { InputFrame } from '../components/common/templates/InputFrame';
import RubleSign from '../components/common/templates/RubleSign';

const bonuses = {
    vase: 500,
    card: 160,
    photoReport: 45
}
const checkboxes = {
    vase: 1,
    card: 2,
    photoReport: 3
}
const Order = () => {
    const [dropdownTime, setDropdownTime] = useState(false);
    const [isVase, setIsVase] = useState(false);
    const [isPhotoReport, setIsPhotoReport] = useState(false);
    const [isСard, setIsCard] = useState(false);

    const totlaPrice = useSelector(store => store.basket.totalPrice);
    const [sum, setSum] = useState(totlaPrice);

    const handlerClickedCheckobox = (currentCheck) => {
        switch (currentCheck) {
            case checkboxes.vase:
                setIsVase(!isVase);
                setSum(!isVase ? sum + bonuses.vase : sum - bonuses.vase);
                break;
            case checkboxes.card:
                setIsCard(!isСard);
                setSum(!isСard ? sum + bonuses.card : sum - bonuses.card);
                break;
            case checkboxes.photoReport:
                setIsPhotoReport(!isPhotoReport);
                setSum(!isPhotoReport ? sum + bonuses.photoReport : sum - bonuses.photoReport);
                break;
            default:
                break;
        }
    }
    return (
        <main className='main'>
            <div className="main__order order">
                <div className="order__container container">
                    <div className="order__title title">Оформление заказа</div>
                    <div className="order__body">
                        <div className="order__contacts contacts-order">
                            <div className="contacts-order__row">
                                <div className="contacts-order__recipient order-recipient">
                                    <div className="order-recipient__title title-info">1. Контакты получателя</div>
                                    <div className="order-recipient__body">
                                        <div className="order-recipient__column">
                                            <InputFrame className={"order-recipient__input"} placeholder={'Имя получателя'}/>
                                            <InputFrame className={"order-recipient__input"} placeholder={'Телефон получателя'}/>
                                            <InputFrame className={"order-recipient__input"} type={'date'} placeholder={'Дата доставки'}/>
                                        </div>
                                        <div className="order-recipient__column">
                                            <InputFrame className={"order-recipient__input"} placeholder={'Регион'}/>
                                            <InputFrame className={"order-recipient__input"} placeholder={'Адрес'}/>
                                            <InputFrame className={"order-recipient__input"} placeholder={'Время доставки'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts-order__row contacts-order__row-lower">
                                <div className="contacts-order__column">
                                    <div className="contacts-order__sender order-sender">
                                        <div className="order-sender__title title-info">2. Контакты отправителя</div>
                                        <InputFrame className={"order-sender__input"} placeholder={'Имя *'}/>
                                        <InputFrame className={"order-sender__input"} placeholder={'Телефон *'}/>
                                        <InputFrame className={"order-sender__input"} placeholder={'Email *'}/>
                                    </div>
                                </div>
                                <div className="contacts-order__column">
                                    <div className="contacts-order__options order-options">
                                        <div className="order-options__title title-info">3. Детали доставки</div>
                                        <div className="order-options__list">
                                            <label className="order-options__check check">
                                                <input type="checkbox" className='check__input' />
                                                <span className='check__box'></span>
                                                Доставка сюрпризом
                                            </label>
                                            <label className="order-options__check check" onChange={() => handlerClickedCheckobox(checkboxes.photoReport)}>
                                                <input type="checkbox" className='check__input' />
                                                <span className='check__box'></span>
                                                Фотоотчет (+ {bonuses.photoReport}<RubleSign marginLeft={"2"}/>)
                                            </label>
                                            <label className="order-options__check check" onChange={() => handlerClickedCheckobox(checkboxes.vase)}>
                                                <input type="checkbox" className='check__input' />
                                                <span className='check__box'></span>
                                                Добавить вазу (+ {bonuses.vase}<RubleSign marginLeft={"2"}/>)
                                            </label>
                                            <label className="order-options__check check">
                                                <input type="checkbox" className='check__input' />
                                                <span className='check__box'></span>
                                                Напомнить о событии
                                            </label>
                                            <label className="order-options__check check">
                                                <input type="checkbox" className='check__input' />
                                                <span className='check__box'></span>
                                                Визитка
                                            </label>
                                            <label className="order-options__check check" onChange={() => handlerClickedCheckobox(checkboxes.card)}>
                                                <input type="checkbox" className='check__input' />
                                                <span className='check__box'></span>
                                                Полномасштабная открытка (+ {bonuses.card}<RubleSign marginLeft={"2"}/>)
                                            </label>
                                            <InputFrame className={"order-options__input"} placeholder={'Повод для открытки'}/>
                                            <InputFrame className={"order-options__input"} placeholder={'Текст открытки'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FinalPriceCard sum = {sum}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Order;