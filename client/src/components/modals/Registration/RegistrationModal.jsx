import React from 'react';
import '../../../scss/components/modal/modal.scss';
import {useDispatch, useSelector} from "react-redux";
import {Modal} from "../Modal";
import {setRegModalStatus} from "../../../store/actions";
import {RegistrationForm} from "./RegistrationForm";

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