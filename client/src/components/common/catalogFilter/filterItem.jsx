import React, {useState} from 'react';
import '../../../scss/components/catalog-filter.scss';
import {useDispatch, useSelector} from "react-redux";
import {addFilter, deleteFilter} from "../../../store/actions";


function FilterItem({category}) {
    const dispatch = useDispatch();
    const chosenCategories = useSelector(store => store.filters);

    const [isActive, setIsActive] = useState(chosenCategories.includes(category.id));

    const onClick = () => {
        isActive
            ? dispatch(deleteFilter(category.id))
            : dispatch(addFilter(category.id));

        setIsActive(!isActive);
    }

    const activeClass = isActive
        ? "catalog-filter__item_active"
        : "";

    return (
        <li
            className={`catalog-filter__item ${activeClass}`}
            onClick={onClick}
        >
            {category.name}
        </li>
    );
}

export {FilterItem};