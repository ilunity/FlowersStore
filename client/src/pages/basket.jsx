import React from "react";
import SliderBox from "../components/common/slider/SliderBox";
import BasketItems from "../components/common/basketContents/BasketItems";
import BasketTotalSum from "../components/common/basketContents/BasketTotalSum";

const Basket = () => {
    return (
        <main className="main">
            <div className="main__basket basket">
                <div className="basket__container container">
                    <div className="basket__title title">Корзина</div>
                    <div className="basket__body">
                        <BasketItems />
                        <BasketTotalSum />
                    </div>
                    <SliderBox />
                </div>
            </div>
        </main>
    );
};

export default Basket;
