import React from 'react';
import '../../../../scss/components/item-wrapper.scss';
import arrowLeft from '../../../../img/icons/arrow-left.svg';
import arrowRight from '../../../../img/icons/arrow-right.svg';


const BUTTON_TYPES = {
    PREVIOUS: "previous",
    NEXT: "next",
};

function FlipButton({type, page, setPage, pageCount}) {

    const handleClick = () => {
        if (type === BUTTON_TYPES.PREVIOUS && page !== 1) {
            setPage(page - 1);
        } else if (type === BUTTON_TYPES.NEXT && page !== pageCount) {
            setPage(page + 1);
        }
    };

    let imgSrc, imgDescription;

    if (type === BUTTON_TYPES.PREVIOUS) {
        imgSrc = arrowLeft;
        imgDescription = "Предыдущая страница";
    } else if (type === BUTTON_TYPES.NEXT) {
        imgSrc = arrowRight;
        imgDescription = "Следующая страница";
    }

    return (
        <button
            className={`pagination-widget__flip-button pagination-widget__flip-button_${type}`}
            onClick={handleClick}
        >
            <img src={imgSrc} alt={imgDescription}/>
        </button>
    )
}

export {FlipButton, BUTTON_TYPES};