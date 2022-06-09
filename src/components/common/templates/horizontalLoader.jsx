import React from 'react';
import '../../../scss/components/horizontal-loader.scss';

function HorizontalLoader() {
    return (
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export {HorizontalLoader};