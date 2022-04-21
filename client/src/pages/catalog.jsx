import React from 'react';
import {ItemsWrapper} from "../components/common/itemCard/ItemsWrapper";
import {CatalogFilter} from "../components/common/catalogFilter/catalogFilter";
import '../scss/components/catalog.scss';
import {useSelector} from "react-redux";


const Catalog = () => {
    const filters = useSelector(state => state.filters);

    return (
        <main className='main catalog-page'>
            <div className="catalog-page__items">
                <CatalogFilter/>
                <ItemsWrapper
                    filters={filters}
                />
            </div>
        </main>
    );
};

export default Catalog;