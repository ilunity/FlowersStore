import React, {useEffect, useState} from 'react';
import '../../../scss/components/item-card.scss'
import {getItems} from "../../../http/itemsAPI";
import {ItemCard} from "./ItemCard";


function ItemsWrapper({limit = 12, page = 1, setPage, filters = [], helperClass = ""}) {
    const [items, setItems] = useState([]);

    const loadItems = async () => {
        const countedItems = await getItems(limit, page, filters);
        setItems(countedItems.items);
    };

    useEffect(async () => {
        await loadItems();
    }, []);

    return (
        <div className={`${helperClass} items-wrapper`}>
            <div className={`${helperClass} items-wrapper__list`}>
                {
                    items.map((item) => {
                        return (
                            <ItemCard
                                key={item.id}
                                item={item}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export {ItemsWrapper};