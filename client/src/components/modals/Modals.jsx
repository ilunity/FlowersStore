import React, {Fragment} from 'react';
import {RegistrationModal} from "./Registration/RegistrationModal";
import {LoginModal} from "./Login/LoginModal";


function Modals(props) {
    return (
        <Fragment>
            <RegistrationModal/>
            <LoginModal/>
        </Fragment>
    )
}

export {Modals};