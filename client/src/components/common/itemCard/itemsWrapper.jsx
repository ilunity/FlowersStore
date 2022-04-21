import React, {useEffect, useState} from 'react';
import '../../../scss/components/item-wrapper.scss'
import {getItems} from "../../../http/itemsAPI";
import {ItemCard} from "./ItemCard";
import {PaginationWidget} from "./paginationWidget/paginationWidget";


function ItemsWrapper({limit = 12, filters = [], helperClass = ""}) {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    const loadItems = async () => {
        const countedItems = await getItems(limit, currentPage, filters);
        setPageCount(Math.ceil(countedItems.count / limit));
        setItems(countedItems.items);
    };

    useEffect(async () => {
        await loadItems();
    }, [filters, currentPage]);

    //todo Добавить сообщение, если нет предметов
    return (
        <div className={`${helperClass} items-wrapper`}>
            <div className={`${helperClass} items-wrapper__list`}>
                {items.map((item) => {
                    return (
                        <ItemCard
                            key={item.id}
                            item={item}
                        />
                    );
                })}
            </div>
            {items.length !== 0 &&
                <PaginationWidget
                    page={currentPage}
                    pageCount={pageCount}
                    setPage={setCurrentPage}
                />
            }
        </div>
    )
}

export {ItemsWrapper};