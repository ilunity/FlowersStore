import React from 'react';
import {CatalogFilter} from "../components/common/catalogFilter/catalogFilter";


function Catalog() {
    return (
        <div className={'page'}>
            <CatalogFilter/>
        </div>
    )
}

export {Catalog};