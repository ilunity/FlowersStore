import React from 'react';
import {useParams} from "react-router-dom";

function Item(props) {
    const {id} = useParams();

    return (
        <div className={'page'}>
            {`Item: ${id}`}
        </div>
    )
}

export {Item};