import React from 'react';
import '../../../scss/components/modal.scss';
import {Modal} from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import {setLoginModalStatus} from "../../../store/actions";
import {LoginForm} from "./LoginForm";

function LoginModal() {
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.activeModals.login);

    const hideModal = () => {
        dispatch(setLoginModalStatus(false));
    };

    return (
        <Modal
            isActive={isActive}
            hideModal={hideModal}
        >
            <div className="form-modal">
                <div className="form-modal__title">
                    Вход в аккаунт
                </div>
                <LoginForm hideModal={hideModal}/>
            </div>
        </Modal>
    )
}

export {LoginModal};