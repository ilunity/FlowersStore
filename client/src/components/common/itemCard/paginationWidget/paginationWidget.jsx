import React from 'react';
import '../../../../scss/components/item-wrapper.scss';
import {PaginationButton} from "./paginationButton";
import {v4 as uniqueNum} from "uuid";


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

//todo Добавить кнопки изменения страниц
function PaginationWidget({page, pageCount, setPage}) {
    return (
        <div className={'pagination-widget'}>
            {generatePaginationButtons(page, pageCount, setPage)}
        </div>
    )
}

export {PaginationWidget};
