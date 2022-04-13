import React, {useState} from 'react';
import '../../../scss/components/catalog-filter.scss';
import {FilterItem} from "./filterItem";
import {arrowDownTight, arrowUpTight} from '../../../img/common/index';


function FilterGroup({categoryGroup: {name, categories}}) {
    const [isCollapsed, setIsCollapsed] = useState(true);


    const categoriesList = categories.map((category) => {
        return (
            <FilterItem key={category.id} category={category}/>
        );
    });

    return (
        <li className={'catalog-filter__group'}>
            <div
                className="catalog-filter__title"
                onClick={() => {setIsCollapsed(!isCollapsed)}}
            >
                {name}
                <img
                    src={isCollapsed ? arrowDownTight : arrowUpTight}
                    alt="Стрелка вниз"
                />
            </div>
            {
                !isCollapsed &&
                <ul className={'catalog-filter__list'}>
                    {categoriesList}
                </ul>
            }
        </li>
    )
}

export {FilterGroup};