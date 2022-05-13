import React from "react";
import { useSelector } from "react-redux";
import FieldRecipient from "../components/common/orderContents/FieldRecipient";
import FieldSender from "../components/common/orderContents/FieldSender";
import FinalPriceCard from "../components/common/orderContents/FinalPriceCard";
import SelectableOptions from "../components/common/orderContents/SelectableOptions";

const Order = () => {
    const sum = useSelector(store => store.basket.totalPrice);

    return (
        <main className="main">
            <div className="main__order order">
                <div className="order__container container">
                    <div className="order__title title">Оформление заказа</div>
                    <div className="order__body">
                        <div className="order__contacts contacts-order">
                            <div className="contacts-order__row">
                                <FieldRecipient />
                            </div>
                            <div className="contacts-order__row contacts-order__row-lower">
                                <div className="contacts-order__column">
                                    <FieldSender />
                                </div>
                                <div className="contacts-order__column">
                                    <SelectableOptions />
                                </div>
                            </div>
                        </div>
                        <FinalPriceCard sum={sum} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Order;
