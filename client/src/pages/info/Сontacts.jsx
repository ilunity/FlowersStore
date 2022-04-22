import React, { useState } from 'react';
import InteractionButton from '../../components/common/buttonTemplates/InteractionButton';
import { InputFrame } from '../../components/common/InputFrame';
import {clock, location, tel} from '../../img/info/index';
const Сontacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formSubmit = () => {
    alert('Сообщение успешно отправлено')
  }
  return (
    <main className='main'>
      <div className="main__contacts contacts">
        <div className="contacts__container container">
          <div className="contacts__title title">Контакты</div>
          <div className="contacts__body">
            <div className="contacts__info info-contacts">
              <div className="info-contacts__title">Свяжитесь с нами</div>
              <div className="info-contacts__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </div>
              <div className="info-contacts__location location">
                <img className="location__icon" src={location} alt="location" />
                <div className="location__text">м. Київ, вулиця Оболонська Набережна, 7, корпус 5</div>
              </div>
              <a href="tel:380999371556" className="info-contacts__tel tel">
                <img className="tel__icon" src={tel} alt="tel" />
                <div className="tel__text">+380 99 937 1556</div>
              </a>
              <div className="info-contacts__working-mode working-mode">
                <img className="working-mode__icon" src={clock} alt="clock" />
                <div className="working-mode__text">Пн - Пт: 09:00 - 20:00 <br /> Сб - Вс 09:00 - 15:00</div>
              </div>
            </div>
            <div className="contacts__form form-contacts">
              <div className="form-contacts__title">Заполните форму для обратной связи</div>
                <form action="#" className="form-contacts__body" onSubmit={formSubmit}>
                  <InputFrame
                  className={'form-contacts__item'}
                  type={'text'}
                  placeholder={'Ваше имя'}
                  value={name}
                  setValue={setName}
                  />
                  <InputFrame
                  className={'form-contacts__item'}
                  type={'email'}
                  placeholder={'E-Mail адрес'}
                  value={email}
                  setValue={setEmail}
                  />
                  <InputFrame
                  className={'form-contacts__item form-contacts__item-message'}
                  type={'text'}
                  placeholder={'Ваше сообщение'}
                  value={message}
                  setValue={setMessage}
                  />
                  <InteractionButton className='form-contacts__item-btn' value={'Отправить'}/>
                </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Сontacts;