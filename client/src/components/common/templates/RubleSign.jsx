import React from 'react';

const RubleSign = ({marginLeft = "10"}) => {
  return (
    <span style={{marginLeft: `${marginLeft}px`}}>&#8381;</span>
  );
};

export default RubleSign;