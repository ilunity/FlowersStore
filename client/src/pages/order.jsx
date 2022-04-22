import React from 'react';
import { InputFrame } from '../components/common/InputFrame';

const Order = () => {
    return (
        <main className='main'>
            <div className="main__order order">
                <div className="order__container container">
                    <div className="order__title title">Оформление заказа</div>
                    <div className="order__contacts contacts-order">
                        <div className="contacts-order__row">
                            <div className="contacts-order__recipient order-recipient">
                                <div className="order-recipient__column">
                                    <InputFrame className={"order-recipient__input"}/>
                                    <InputFrame className={"order-recipient__input"}/>
                                    <InputFrame className={"order-recipient__input"}/>
                                </div>
                                <div className="order-recipient__column">
                                    <InputFrame className={"order-recipient__input"}/>
                                    <InputFrame className={"order-recipient__input"}/>
                                    <InputFrame className={"order-recipient__input"}/>
                                </div>
                            </div>
                        </div>
                        <div className="contacts-order__row">
                            <div className="contacts-order__column">
                                <div className="contacts-order__sender order-sender">
                                    <InputFrame className={"order-sender__input"}/>
                                    <InputFrame className={"order-sender__input"}/>
                                    <InputFrame className={"order-sender__input"}/>
                                </div>
                            </div>
                            <div className="contacts-order__column">
                                <div className="contacts-order__options order-options">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Order;