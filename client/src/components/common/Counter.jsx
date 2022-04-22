import React, { useState } from 'react';
import addCount from '../../img/basket/addCount.svg';
import removeCount from '../../img/basket/delCount.svg';
const Counter = ({maxCount}) => {
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    if (count < maxCount) {
      setCount(count + 1)
    }
  }
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <div className="item-basket__counter counter">
      {count}
      <img 
        className='counter__arrow counter__arrow-add' 
        onClick={increaseCount} 
        src={addCount} 
        alt="increaseCount"
      />
      <img 
        onClick={decreaseCount} 
        className='counter__arrow counter__arrow-del'
        src={removeCount} 
        alt="decreaseCount" 
      />
    </div>
  );
};

export default Counter;