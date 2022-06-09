import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getItem} from "../http/itemsAPI";
import {ItemPageCard} from "../components/common/itemPageCard/itemPageCard";

const Item = () => {
    const {id} = useParams();
    const [item, setItem] = useState();

    useEffect(async () => {
        const item = await getItem(id);
        setItem(item);
    })

    return (
        <main className='main'>
            <div className={'main__item-page item-page'}>
                <div className="item-page__container container">
                    {item && <ItemPageCard item={item}/>}
                </div>
            </div>
        </main>
    )
};

export default Item;