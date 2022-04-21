import React from 'react';
import '../../../../scss/components/item-wrapper.scss';



function PaginationButton({children, onClick, isCurrent= false, isShowMore = false}) {
    const additionalClass = isShowMore
        ? 'pagination-widget__button_show-more' :
        isCurrent ? 'pagination-widget__button_current'
        : '';


    return (
        <button
            className={`pagination-widget__button ${additionalClass}`}
            onClick={onClick}
        >
            {isShowMore
                ? "..."
                : children}
        </button>
    )
}

export {PaginationButton};