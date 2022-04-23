import React from 'react';
import addCount from '../../img/common/arrow-right-tight.svg';
import removeCount from '../../img/common/arrow-left-tight.svg';
import { setItemCount } from '../../http/basketAPI';


const Counter = ({count, setCount, maxCount, className = '', id}) => {
    const increaseCount = async (id, count) => {
        if (count < maxCount) {
            setCount(count + 1);
            const currentCount = count + 1;
            // await setItemCount(id, currentCount);
        }
    }
    const decreaseCount = async (id, count) => {
        if (count > 1) {
            setCount(count - 1);
            const currentCount = count - 1
            // await setItemCount(id, currentCount);
        }
    }
    return (
        <div className={`counter ${className}`}>
            <img
                onClick={() => decreaseCount(id, count)}
                className='counter__arrow counter__arrow-del'
                src={removeCount}
                alt="decreaseCount"
            />
            {count}
            <img
                onClick={() => increaseCount(id, count)}
                className='counter__arrow counter__arrow-add'
                src={addCount}
                alt="increaseCount"
            />
        </div>
    );
};

export default Counter;