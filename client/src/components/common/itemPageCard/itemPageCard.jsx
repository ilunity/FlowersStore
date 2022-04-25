import React, {useState} from 'react';
import '../../../scss/components/item-page-card.scss';
import {STATIC_URL} from "../../../http/consts";
import InteractionButton from "../buttonTemplates/InteractionButton";
import {addItemBasket} from "../../../store/actions";
import {addToBasket} from "../../../http/basketAPI";
import {useDispatch} from "react-redux";
import {ItemInfos} from "./itemInfos";
import Counter from "../Counter";


function ItemPageCard({item}) {
    const dispatch = useDispatch();
    
    const [basketCount, setBasketCount] = useState(1);
    const {id, name, price, count, img: imgName, description, item_infos: itemInfos} = item;
    const img = `${STATIC_URL}/${imgName}`;
    const basketItems = useSelector(store => store.basket);
    const isAuth = useSelector(store => store.isAuth);
    const addToBasketHandler = async () => {
        if (!basketItems.find((basketItem) => {
            return basketItem.item.id === id;
        }) && isAuth) {
            dispatch(addItemBasket(item));
            await addToBasket(id);
        }
    };

    return (
        <div className={'item-page-card'}>
            <div className="item-page-card__img-wrapper">
                <img
                    src={img}
                    alt="Фотография товара"
                />
            </div>
            <div className="item-page-card__description-panel">
                <div className="item-page-card__title">
                    {name}
                </div>
                <div className="item-page-card__price">
                    {`${price} rub`}
                </div>
                <ItemInfos itemInfos={itemInfos}/>
                <div className="item-page-card__order-panel">
                    <Counter
                        className={'item-page-card__counter'}
                        count={basketCount}
                        maxCount={count}
                        setCount={setBasketCount}
                    />
                    <InteractionButton
                        onClick={addToBasketHandler}
                        value={'Заказать'}
                    />
                </div>
                <div className="item-page-card__description">
                    <div className="item-page-card__description-title">Описание</div>
                    <div className="item-page-card__description-text">{description}</div>
                </div>
            </div>
        </div>
    )
}

export {ItemPageCard};