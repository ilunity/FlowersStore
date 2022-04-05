import React from 'react';
import '../scss/style.scss';
import {useParams} from "react-router-dom";

function Item(props) {
    const {id} = useParams();

    return (
        <div>
            {`Item: ${id}`}
        </div>
    )
}

export {Item};