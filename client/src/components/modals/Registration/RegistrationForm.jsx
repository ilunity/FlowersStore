import React, {useState} from 'react';
import '../../../scss/style.scss';
import {InputFrame} from "../../common/InputFrame";
import InteractionButton from "../../common/InteractionButton";
import {registerUser} from "../../../http/userAPI";
import {useDispatch} from "react-redux";
import {getAuthStatus} from "../../../store/asyncActions";

function RegistrationForm({hideModal}) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        hideModal();
        await registerUser({
            email,
            password,
            surname,
            name
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
            <InputFrame
                className={'form-modal__input'}
                type={'text'}
                placeholder={'Фамилия'}
                value={surname}
                setValue={setSurname}
            />
            <InputFrame
                className={'form-modal__input'}
                type={'text'}
                placeholder={'Имя'}
                value={name}
                setValue={setName}
            />
            <InteractionButton
                type={'submit'}
                className={'form-modal__btn'}
                value={'Зарегистрироваться'}
                onClick={onSubmit}
            />
        </form>
    )
}

export {RegistrationForm};