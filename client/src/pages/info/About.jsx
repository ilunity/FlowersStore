import React from 'react';
import {pinkRoses, redRoses, lilacRoses, roses, tulips, vase} from '../../img/info/index';
const About = () => {
  return (
    <main className='main'>
      <div className="main__about about">
        <div className="about__container container">
        <div className="about__title">Цветочный интернет магазин</div>
          <div className="about__upper-gallery upper-gallery">
            <div className="upper-gallery__img">
              <div className='upper-gallery__column'>
                <div className="upper-gallery__roses">
                  <img src={roses} alt="roses" />
                </div>
              </div>
              <div className="upper-gallery__column">
                <div className="upper-gallery__vase">
                  <img src={vase} alt="vase" />
                </div>
                <div className="upper-gallery__tulips">
                  <img src={tulips} alt="tulips" />
                </div>
              </div>
            </div>
            
            
            <div className="upper-gallery__text">
              <p style={{marginBottom: '35px'}}>
                Осуществляем продажу цветов с доставкой по указанному адресу на территории Киева и всей Украины !
              </p>
              <p style={{marginBottom: '45px'}}>
              Цветы можно заказать через наш простой в использовании и профессиональный интернет-магазин (поддержка всех возможных способов он-лайн оплаты) с предложением честно описанных и сфотографированных букетов. Принимаем заказы по телефону, электронной почте и в офисе нашей компании..
              </p> 
              <p style={{marginBottom: '55px'}}>
              Обеспечиваем хороший контакт с нашей компанией с клиентом, вежливое обслуживание и профессиональное выполнение заказа.
              Гарантируем анонимность и поддержку для наших клиентов.
              </p>
              <p style={{marginBottom: '45px'}}> 
                В нашем цветочном интернет-магазине Flowers-Ukraine.com вы найдете прекрасные цветочные композиции отвечающие последним европейским тенденциям. Также следует отметить, что все букеты прежде всего созданы со страстью, потому что флористика для наших сотрудников это искусство которым они увлекаются не первый год.
              </p>
              <p> Наш магазин цветов прилагает все усилия, чтобы каждая композиция была собрана из специально подобранных цветов, с особой тщательностью и точностью, а доставка цветов производилась в указанный срок.
              </p>
            </div>
          </div>
          <div className="about__cental-text cental-text" style={{marginBottom: '37px'}}>
            <p style={{marginBottom: '23px'}}>
              Вы можете смело заказать букет в Киев, так как мы гарантируем высокое качество, свежесть и долговечность наших цветочных композиций чтобы вы могли как можно дольше наслаждаться приобретенными цветами. Кроме того, букет с доставкой в Киев- это не единственное направление на котором мы действуем. Мы располагаем широким спектром дополнительных позиций, таких как:
            </p>
            <ul className='cental-text__list' style={{marginBottom: '35px'}}>
              <li className='cental-text__item'><span>плетеные корзинки со сладостями;</span></li>
              <li className='cental-text__item'><span>коробки с цветами и сладостями;</span></li>
              <li className='cental-text__item'><span>небольшие подарки, которые вы можете отправить вместе с букетом.</span></li>
            </ul>
              <p style={{marginBottom: '23px'}}>
              В нашем магазине цветов есть предложение- поздравительные открытки, которые по вашему желанию наш курьер вручит вместе с цветами получателю.
              </p>
              <p style={{marginBottom: '23px'}}>
              Мы заботимся о том, чтобы доставка букета в Киев, которую мы предоставляем Вам, была оперативной, а ассортимент разнообразным. Наш цветочный интернет магазин имеет возможность составлять композиции в соответствии с вашими ожиданиями, с учетом индивидуальных вкусов.
              </p>
              <p style={{marginBottom: '23px'}}>
              Обслуживаем индивидуальных клиентов которые знают как важно вовремя заказать букет в Киеве чтобы выражать свои чувства, углублять отношения, передавать пожелания и подчеркивать личное отношение при помощи нашей службы доставки цветов.
              </p>
          </div>
          <div className="about__lower-gallery lower-gallery">
            <div className="lower-gallery__text">
              <p style={{marginBottom: '35px'}}>
                Сотрудничаем с компаниями которые заинтересованы в поддержании соответствующего уровня контактов. Многие предприятия таким образом проявляют уважение по отношению к своим сотрудникам, по случаю дней рождения, по праздникам или на корпоративных вечеринках.
              </p>
              <p style={{marginBottom: '35px'}}>
                Вы можете заказать цветы с доставкой в киеве как в будние дни, так и по субботам и воскресеньям. Интернет магазин роз работает 7 дней в неделю и 24 часа в сутки. Благодаря индивидуальному и профессиональному подходу к каждому клиенту много довольных людей снова и снова возвращаются к нам чтобы заказать цветы в Киеве и Украине, при этом круг довольных клиентов расширяется с каждым днем.
              </p>
              <p style={{marginBottom: '20px'}}>
                Осуществляем продажу срезанных цветов, горшечных и искусственных. Наше предложение включает, среди прочего:
              </p>
              <ul className="lower-gallery__list">
                <li className="lower-gallery__item"><span>букеты праздничные, декоративные,</span></li>
                <li className="lower-gallery__item"><span>свадебные букеты, украшения для церквей, автомобилей,</span></li>
                <li className="lower-gallery__item"><span>букеты новогодние, рождественские, пасхальные,</span></li>
                <li className="lower-gallery__item"><span>цветочные корзины, новогодние корзины, а также фруктовые корзины,</span></li>
                <li className="lower-gallery__item"><span>цветы горшечные и срезанные, в частности: лилия, фиалка, хризантема, гладиолусы, анютины глазки, ирис, нарцисс, георгины, многолетники, пеларгония, пион, астра, папоротник, кактус, алоэ, плющ, каллы, фикусы и т.д.</span></li>
              </ul>
            </div>
            <div className="lower-gallery__img">
              <div className="lower-gallery__column">
                <div className="lower-gallery__pink-roses">
                  <img src={pinkRoses} alt="pinkRoses" />
                </div>
              </div>
              <div className="lower-gallery__column">
                <div className="lower-gallery__red-roses">
                  <img src={redRoses} alt="redRoses" />
                </div>
                <div className="lower-gallery__lilac-roses">
                  <img src={lilacRoses} alt="lilacRoses" />
                </div>
              </div>
              
            </div>
          </div>
          <div className="about__benefits benefits">
            <div className="benefits__tltle">Почему стоит воспользоваться нашим магазином цветов?</div>
            <div className="benefits__text">
              <p style={{marginBottom: '15px'}}>
              Мы предоставляем лучшее качество продукции, прилежное обслуживание, своевременную доставку и конкурентоспособные цены, внушающие исключительно доброжелательные улыбки у наших клиентов и получателей. Постоянно повышаем качество оказываемых услуг.
              </p>
              <p style={{marginBottom: '35px'}}>
              Мы к вашим услугам 365 дней в году!
              </p>
              <p style={{marginBottom: '10px'}}>
                1.     ФЛОРИСТ С ОПЫТОМ РАБОТЫ. Мы имеем большой опыт в продажах цветов онлайн, поэтому каждый наш клиент остается довольным и возвращается снова к нам. За время работы мы узнали как преодолевать трудности, поэтому все цветы доставляем в срок.
              </p>
              <p style={{marginBottom: '10px'}}>
                2.     МЫ ЗНАЕМ СВОИХ КЛИЕНТОВ. Мы знаем, что цветы, подаренные важному человеку должны быть красивыми, потому что самое главное для вас это его счастье. Поэтому мы заботимся о том, чтобы этот момент был чем-то сакральным, чем-то большим, а наши цветы высокого качества этому гарантия. Можете смело воспользоваться услугами нашего цветочного интернет магазина.
              </p >
              <p>
                3.     УДОБНАЯ ОПЛАТА. Вы можете быстро и безопасно оплатить заказ через популярные платежные системы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;