import {Navigate, Routes, Route} from "react-router-dom";
import React from 'react';
import {routes} from "../utils/routes";
import '../scss/style.scss';

function RouterComponent(props) {
    return (
        <Routes>
            {
                routes.map((route) => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component/>}
                        />
                    );
                })
            }
            <Route
                path={'*'}
                element={<Navigate to={'/'} replace/>}
            />
        </Routes>
    );
}

export {RouterComponent};