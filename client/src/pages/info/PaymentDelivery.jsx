import React from 'react';
import {privateBank, pc, mc, visaIcon, yandex} from '../../img/info/index';
const PaymentAndDelivery = () => {
  return (
    <main className='main'>
      <div className="main__payment-delivery payment-delivery">
        <div className="payment-delivery__container container">
          <div className="payment-delivery__title title">Оплата и доставка</div>
          <div className="payment-delivery__general-info">
            <p>
              Flowers-Ukraine.com - это единая сеть партнеров, курьерская доставка цветов, что гарантирует доставку букетов и подарков по всей Украине вовремя и в надлежащем виде. Доставка цветов по украине осуществляется в удобное для Вас время.
            </p>
            <p>
              Цветы и корзины фруктов - это скоропортящийся продукт, поэтому компания оставляет за собой право изменения состава и внешнего вида товара на 20-25% с сохранением общего вида и стоимости компонентов.
            </p>
            <p>
              Доставка цветов в областные центры Украины - от 100 грн
            </p>
            <p>
              За ранние (с 7 до 9) и вечерние (с 21 до 23) временные промежутки доставки доплата составляет 50грн.
            </p>
            <p>
              В крупных городах: Киев, Днепропетровск, Одесса, Донецк, Харьков
            </p>
            <ul className='payment-delivery__list'>
              <li><span>доставка осуществляется бесплатно при заказе от 800 грн;</span></li>
              <li><span>при заказе менее 800 грн доставка оплачивается отдельно и составляет 100 грн.</span></li>
            </ul>
            <p>
              Доставка цветов по районным цетрам и поселкам от 160 грн, более подробно уточнять у менеджера.
            </p>
            <p>
            При высокой загруженности дорог время доставки гарантировать невозможно. Надеемся на Ваше понимание!
            </p>
            <p>
            Доставка заказов оплаченных после 18:00 по киевскому времени, при условии ранней доставки на следующий день, может быть перенесена на более позднее время по согласованию с заказчиком.
            </p>
            <p>
              Вы можете оплатить товар:
            </p>
          </div>
          <div className="payment-delivery__payment-methods payment-methods">
            <div className="payment-methods__list">
              <div className="payment-methods__item">
                <img src={privateBank} alt="privateBank" />
              </div>
              <div className="payment-methods__item">
                <img src={mc} alt="masterCard" />
              </div>
              <div className="payment-methods__item">
                <img src={pc} alt="privateBank" />
              </div>
              <div className="payment-methods__item">
                <img src={visaIcon} alt="visaIcon" />
              </div>
              <div className="payment-methods__item">
                <img src={yandex} alt="yandexMoney" />
              </div>
            </div>
            <div className="payment-methods__text">
              <p style={{marginBottom:'15px'}}>
                «Приват24» – самый популярный Интернет-банк Украины.
              </p>
              <p style={{marginBottom:'35px'}}>
                Наличными оплата производится предварительно перед фактом доставки наличными курьеру. Стоимость услуги выезда курьера составляет 20 грн.
                Оплата карточкой Visa/MasterCard В нашем магазине Вы можете оплатить заказ при помощи платежной (пластиковой) карты.Сервис проведения платежей обеспечивается Межбанковской системой электронной доставки и оплаты счетов Portmone.com с использованием современного и безопасного механизма авторизации платежных карт. 
                Реквизиты платежных карт вводятся на сайте Portmone.com в защищенном режиме, и недоступны сотрудникам. 
                Яндекс.Деньги После оплаты, пожалуйста напишите нам email с суммой проплаты и номером Вашего заказа. А также укажите эту информацию при переводе.
              </p>
              <p style={{marginBottom:'35px'}}>
                Мы работаем по всей Украине!
              </p>
            </div>
          </div>
          <div className="payment-delivery__treaty treaty">
            <div className="treaty__titlte">Договор-оферта интернет-магазина</div>
              <p>
                Данный интернет-магазин (далее ПРОДАВЕЦ), публикует настоящий договор, являющийся публичным договором-офертой в адрес как физических, так и юридических лиц (далее ПОКУПАТЕЛЬ) о нижеследующем:
              </p>
              

              <p>Статья 1. Предмет договора-оферты.</p>

              <p>1.1. ПРОДАВЕЦ обязуется произвести пополнение виртуального счета на сайте flowers-ukraine.com ПОКУПАТЕЛЮ, а ПОКУПАТЕЛЬ обязуется оплатить услугу любым удобным способом на сайте платежного шлюза WWW.INTERKASSA.COM.</p>

              <p>Статья 2. Момент заключения договора.</p>

              <p>2.1. Текст данного Договора является публичной офертой</p>

              <p>2.2. Факт оформления ЗАКАЗА УСЛУГИ у ПРОДАВЦА как самостоятельно, так и через оператора, является безоговорочным принятием данного Договора, и ПОКУПАТЕЛЬ рассматривается как лицо, вступившее с ПРОДАВЦОМ в договорные отношения.</p>

              <p>2.3. Оформление ЗАКАЗА УСЛУГИ и расчета осуществляется путем заказа ПОКУПАТЕЛЕМ в интернет-магазине flowers-ukraine.com.</p>

              <p>Статья 3. Стоимость УСЛУГИ.</p>

              <p>3.1. Цены в интернет-магазине указаны в валюте страны покупателя.</p>

              <p>3.2. Стоимость УСЛУГИ выбирается ПОКУПАТЕЛЕМ, от нее зависит сумма, которая будет зачислена ПОКУПАТЕЛЮ на виртуальный счет сайта flowers-ukraine.com.</p>

              <p> 3.3. Один ПОКУПАТЕЛЬ имеет право заказывать УСЛУГУ неограниченное количество раз.</p>

              <p> Статья 4. Оплата УСЛУГИ.</p>

              <p> 4.1. Оплата услуги осуществляется ПОКУПАТЕЛЕМ одним из множества доступных способов, на сайте платежного шлюза WWW.INTERKASSA.COM</p>

              <p>4.2. В большинстве случаев, комиссия с ПОКУПАТЕЛЯ не взимается, однако платежный шлюз WWW.INTERKASSA.COM, а так же платежная система имеют право взимать</p>

              <p>Статья 5. Оказание УСЛУГИ.</p>

              <p>5.1. В большинстве случаев оказание УСЛУГИ ПОКУПАТЕЛЮ осуществляется автоматической системой после проведения платежа в срок не более одного часа.</p>

              <p>5.2. В случае, если в течение одного часа УСЛУГА ПОКУПАТЕЛЮ не оказана, он обязан сообщить о возникновении проблемы консультанту по телефону и указать необходимые для проверки платежа сведения, в этом случае УСЛУГА будет оказана в ручном режиме в течение 48 часов с момента обращения.</p>

              <p>Статья 6. Права и обязанности сторон.</p>

              <p>6.1. ПРОДАВЕЦ обязуется:</p>

              <p>6.1.1. Не разглашать любую частную информацию ПОКУПАТЕЛЯ и не предоставлять доступ к этой информации третьим лицам, за исключением случаев, предусмотренных законодательством.</p>

              <p>6.1.2. Предоставить ПОКУПАТЕЛЮ возможность получения бесплатных консультаций по контактным данным, указанным на сайте магазина (flowers-ukraine.com). Объем консультаций ограничивается конкретными вопросами, связанными с выполнениями ЗАКАЗА.</p>

              <p>6.1.3. Оказать ПОКУПАТЕЛЮ УСЛУГУ пополнения счета на сайте flowers-ukraine.com автоматической системой в течение часа после оплаты услуги, либо в ручном режиме в течение 48 часов после обращение ПОКУПАТЕЛЯ в консультанту (см. п.5.2).</p>

              <p>6.1.4. ПРОДАВЕЦ оставляет за собой право изменять настоящий ДОГОВОР в одностороннем порядке до момента его заключения.</p>

              <p>6.2. ПОКУПАТЕЛЬ обязуется:</p>

              <p> 6.2.1. До момента заключения ДОГОВОРА ознакомиться с содержанием договора-оферты, условиями оплаты и доставки на сайте магазина (flowers-ukraine.com).</p>

              <p>6.2.2. Предоставлять достоверную информацию о себе (контактные телефоны, адрес электронной почты) и реквизиты для доставки уведомления об успешном платеже.</p>

              <p>Статья 7. Ответственность сторон и разрешение споров.</p>

              <p>7.1. Стороны несут ответственность за неисполнение или ненадлежащее исполнение настоящего ДОГОВОРА в порядке, предусмотренном настоящим ДОГОВОРОМ и действующим законодательством.</p>

              <p>7.3. ПРОДАВЕЦ не несет ответственности, если различные ожидания ПОКУПАТЕЛЯ об оказанной услуге оказались не оправданны.</p>

              <p>7.4. ПРОДАВЕЦ не несет ответственности за частичное или полное неисполнение обязательств по оказанию УСЛУГИ, если они являются следствием форс-мажорных обстоятельств.</p>

              <p> 7.5. ПОКУПАТЕЛЬ, оформляя ЗАКАЗ, несет ответственность за достоверность предоставляемой информации о себе, а так же подтверждает, что с условиями настоящего ДОГОВОРА ознакомлен и согласен.</p>
                
              <p>7.6. Все споры и разногласия, возникающие при исполнении СТОРОНАМИ обязательств по настоящему Договору, решаются путем переговоров. В случае невозможности их устранения, СТОРОНЫ имеют право обратиться за судебной защитой своих интересов.</p>

              <p>Статья 8. Возврат средств.</p>

              <p>8.1. Все платежи на сайте flowers-ukraine.com конечны и не могут быть возвращены полностью или частично на счет ПОКУПАТЕЛЯ.</p>

              <p>Статья 9. Форс-мажорные обстоятельства.</p>

              <p>9.1. Стороны освобождаются от ответственности за неисполнение или ненадлежащее исполнение обязательств по Договору на время действия непреодолимой силы. Под непреодолимой силой понимаются чрезвычайные и непреодолимые при данных условиях обстоятельства, препятствующие исполнению своих обязательств СТОРОНАМИ по настоящему Договору. К ним относятся стихийные явления (землетрясения, наводнения и т. п.), обстоятельства общественной жизни (военные действия, чрезвычайные положения, крупнейшие забастовки, эпидемии и т. п.), запретительные меры государственных органов (запрещение перевозок, валютные ограничения, международные санкции запрета на торговлю и т. п.). В течение этого времени СТОРОНЫ не имеют взаимных претензий, и каждая из СТОРОН принимает на себя свой риск последствия форс-мажорных обстоятельств.</p>

              <p>Статья 10. Срок действия договора.</p>

              <p>10.1. Настоящий ДОГОВОР вступает в силу с момента обращения в Интернет-магазин flowers-ukraine.com и оформления ЗАКАЗА, и заканчивается при полном исполнении обязательств СТОРОНАМИ.</p>

              <p>Статья 11. Реквизиты интернет магазина.</p>

          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentAndDelivery;