import React from 'react';
import '../../../scss/components/item-page-card.scss';

function ItemInfos({itemInfos}) {

    const infos = itemInfos.map((info) => {
        return (
            <div className={'item-card-infos__item'}>
                <div className="item-card-infos__title">{info.title}</div>
                <div className="item-card-infos__description">{info.description}</div>
            </div>
        );
    });

    return (
        <div className={'item-card-infos'}>
            {infos}
        </div>
    )
}

export {ItemInfos};