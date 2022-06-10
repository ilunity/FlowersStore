import React, {useEffect, useState} from 'react';
import '../../../scss/components/catalog-filter.scss';
import {FilterGroup} from "./FilterGroup";
import {getGroupedCategories} from "../../../http/categoryGroupsAPI";


function CatalogFilter() {
    const [groupedCategories, setGroupedCategories] = useState();

    useEffect(async () => {
        setGroupedCategories(await getGroupedCategories());
    }, []);

    // todo add loaderl
    return (
        <ul className={'catalog-filter'}>
            {
                groupedCategories && groupedCategories.map((categoryGroup) => {
                    return (
                        <FilterGroup
                            key={categoryGroup.id}
                            categoryGroup={categoryGroup}
                        />
                    );
                })
            }
        </ul>
    )
}

export {CatalogFilter};