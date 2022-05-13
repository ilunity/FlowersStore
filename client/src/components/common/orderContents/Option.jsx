import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSumBasket } from "../../../store/reducers/basketReducer";


const Option = ({ name, price }) => {
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false);
    const sum = useSelector(store => store.basket.totalPrice);
    const handlerClickCheck = () => {
        setCheck(!check);
        dispatch(setSumBasket(!check ? sum + price : sum - price));
    };
    return (
        <label
            className="order-options__check check"
            onChange={handlerClickCheck}
        >
            <input type="checkbox" className="check__input" />
            <span className="check__box"></span>
            {price !== 0 ? `${name} ( +${price} )` : name}
        </label>
    );
};

export default Option;
