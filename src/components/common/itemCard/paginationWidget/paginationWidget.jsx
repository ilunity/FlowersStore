import React, { useEffect } from 'react';
import '../../../../scss/components/item-wrapper.scss';
import {PaginationButton} from "./paginationButton";
import {v4 as uniqueNum} from "uuid";
import {FlipButton, BUTTON_TYPES} from "./flipButton";


const generatePaginationButtons = (currentPage, pageCount, setPage) => {
    let paginationButtons = [];
    if (pageCount <= 7) {
        for (let page = 1; page <= pageCount; page++) {
            if (page === currentPage) {
                paginationButtons.push(
                    <PaginationButton
                        key={uniqueNum()}
                        isCurrent={true}
                    >
                        {page}
                    </PaginationButton>
                )
            } else {
                paginationButtons.push(
                    <PaginationButton
                        key={uniqueNum()}
                        onClick={() => setPage(page)}
                    >
                        {page}
                    </PaginationButton>
                )
            }
        }
        return paginationButtons;
    }

    if (currentPage > 4) {
        paginationButtons.push(
            <PaginationButton
                key={uniqueNum()}
                onClick={() => setPage(1)}
            >
                {1}
            </PaginationButton>
        );
        paginationButtons.push(
            <PaginationButton
                key={uniqueNum()}
                isShowMore={true}
            />
        );

        for (let page = currentPage - 2; page < currentPage; page++) {
            paginationButtons.push(
                <PaginationButton
                    key={uniqueNum()}
                    onClick={() => setPage(page)}
                >
                    {page}
                </PaginationButton>
            )
        }

    } else {
        for (let page = 1; page < currentPage; page++) {
            paginationButtons.push(
                <PaginationButton
                    key={uniqueNum()}
                    onClick={() => setPage(page)}
                >
                    {page}
                </PaginationButton>
            )
        }
    }

    paginationButtons.push(
        <PaginationButton
            key={uniqueNum()}
            onClick={() => setPage(currentPage)}
            isCurrent={true}
        >
            {currentPage}
        </PaginationButton>
    );

    if (pageCount - currentPage > 3) {
        for (let page = currentPage + 1; page <= currentPage + 2; page++) {
            paginationButtons.push(
                <PaginationButton
                    key={uniqueNum()}
                    onClick={() => setPage(page)}
                >
                    {page}
                </PaginationButton>
            )
        }

        paginationButtons.push(<PaginationButton key={uniqueNum()} isShowMore={true}/>);
        paginationButtons.push(
            <PaginationButton
                key={uniqueNum()}
                onClick={() => setPage(pageCount)}
            >
                {pageCount}
            </PaginationButton>
        );

    } else {
        for (let page = currentPage + 1; page <= pageCount; page++) {
            paginationButtons.push(
                <PaginationButton
                    key={uniqueNum()}
                    onClick={() => setPage(page)}
                >
                    {page}
                </PaginationButton>
            )
        }
    }
    return paginationButtons;
};

//todo Возвращать страницу наверх при перелистывании
function PaginationWidget({page, setPage, pageCount}) {
    return (
        <div className={'pagination-widget'}>
            <FlipButton
                type={BUTTON_TYPES.PREVIOUS}
                page={page}
                setPage={setPage}
                pageCount={pageCount}
            />
            {generatePaginationButtons(page, pageCount, setPage)}
            <FlipButton
                type={BUTTON_TYPES.NEXT}
                page={page}
                setPage={setPage}
                pageCount={pageCount}
            />
        </div>
    )
}

export {PaginationWidget};
