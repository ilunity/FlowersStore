import React from 'react';
import {ItemsWrapper} from "../components/common/itemCard/ItemsWrapper";
import {CatalogFilter} from "../components/common/catalogFilter/catalogFilter";
import '../scss/components/catalog.scss';
import {useSelector} from "react-redux";


const Catalog = () => {
    const filters = useSelector(state => state.filters);
    return (
        <main className='main'>
            <div className="main__catalog catalog">
                <div className="catalog__container container">
                    <div className={'catalog__items'}>
                        <CatalogFilter/>
                        <ItemsWrapper
                            filters={filters}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Catalog;