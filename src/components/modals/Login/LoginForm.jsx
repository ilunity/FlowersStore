import React, {useState} from 'react';
import '../../../scss/components/modal.scss';
import {InputFrame} from "../../common/templates/InputFrame";

import {useDispatch} from "react-redux";
import {loginUser} from "../../../http/userAPI";
import {getAuthStatus} from "../../../store/asyncActions";
import InteractionButton from '../../common/templates/buttonTemplates/InteractionButton';

function LoginForm({hideModal}) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        hideModal();
        await loginUser({
            email,
            password,
        });

        dispatch(getAuthStatus());
    };

    return (
        <form
            className="form-modal__form"
            onSubmit={onSubmit}
        >
            <InputFrame
                className={'form-modal__input'}
                type={'text'}
                placeholder={'email'}
                value={email}
                setValue={setEmail}
            />
            <InputFrame
                className={'form-modal__input'}
                type={'password'}
                placeholder={'Пароль'}
                value={password}
                setValue={setPassword}
            />
            <InteractionButton
                type={'submit'}
                className={'form-modal__btn'}
                value={'Войти'}
                onClick={onSubmit}
            />
        </form>
    )
}

export {LoginForm};