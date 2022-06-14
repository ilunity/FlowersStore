import React from 'react';
import SearchIcon from '../../../img/header/icons/ToFindIcon.svg';

const SearchBar = () => {
    return (
        <div className="lower-menu__search search">
            <form action="#" className='search__goods goods'>
                <input placeholder='Поиск по товарам' type="text" className='goods__input'/>
                <button className='goods__btn'><img src={SearchIcon} alt=""/></button>
            </form>
        </div>
    )
}

export default SearchBar;