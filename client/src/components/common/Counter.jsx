import React from 'react';
import addCount from '../../img/common/arrow-right-tight.svg';
import removeCount from '../../img/common/arrow-left-tight.svg';
import { useDispatch } from 'react-redux';
import { decreaseBasketItemCount, increaseBasketItemCount } from '../../store/actions';


const Counter = ({count, setCount, maxCount, className = '', id}) => {
    const dispatch = useDispatch();
    const increaseCount = () => {
        if (count < maxCount) {
            setCount(count + 1);
            dispatch(increaseBasketItemCount(id));
        }
    };
    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
            dispatch(decreaseBasketItemCount(id));
        }
    };

    return (
        <div className={`counter ${className}`}>
            <img
                onClick={decreaseCount}
                className='counter__arrow counter__arrow-del'
                src={removeCount}
                alt="decreaseCount"
            />
            {count}
            <img
                onClick={increaseCount}
                className='counter__arrow counter__arrow-add'
                src={addCount}
                alt="increaseCount"
            />
        </div>
    );
};

export default Counter;