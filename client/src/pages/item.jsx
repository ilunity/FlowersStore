import React from 'react';
import {useParams} from "react-router-dom";

const Item = () => {
    const {id} = useParams();

    return (
        <main className='main'>
            {`Item: ${id}`}
        </main>
    )
};

export default Item;