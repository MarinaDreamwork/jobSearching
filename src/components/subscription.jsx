import ButtonWithIcon from "./buttonWithIcon";
import EnvelopeIcon from '../img/envelope.svg';

const Subscription = () => {
  return (
    <section className="section subscribe">
      <div className="container">
        <form className="subscribe-form d-flex flex-column justify-content-center">
          <h1 className="subscribe-title">Подпишитесь на рассылку<br /> с новыми вакансиями</h1>
          <p className="subscribe-text">Мы отправляем по одному письму в неделю<br /> с подходящими вам вакансиями</p>
          <div className="input-group col-5">
            <input type="text" className='input' placeholder='E-mail'/>
            <ButtonWithIcon title='Подписаться' src={EnvelopeIcon + '#envelope'}/>
         </div>
        </form>
      </div>
    </section>
  )
}

export default Subscription;