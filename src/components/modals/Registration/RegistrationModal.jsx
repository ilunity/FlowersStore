import React from 'react';
import '../../../scss/components/modal.scss';
import {useDispatch, useSelector} from "react-redux";
import {Modal} from "../Modal";

import {RegistrationForm} from "./RegistrationForm";
import { setRegModalStatus } from '../../../store/reducers/modalsReducer';

function RegistrationModal(props) {
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.activeModals.registration);

    const hideModal = () => {
        dispatch(setRegModalStatus(false));
    };

    return (
        <Modal
            isActive={isActive}
            hideModal={hideModal}
        >
            <div className="form-modal">
                <div className="form-modal__title">
                    Регистрация
                </div>
                <RegistrationForm hideModal={hideModal}/>
            </div>
        </Modal>
    )
}

export {RegistrationModal};