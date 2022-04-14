import InputGroup from "../inputGroup";
import EnvelopeIcon from '../../img/envelope.svg';

const InputGroupSubscribtionWrapper = () => {
  return (
     <div className="input-group col-5">
        <InputGroup placeholder='E-mail' title='Подписаться' src={EnvelopeIcon + '#envelope'}/>
      </div>
  )
}

export default InputGroupSubscribtionWrapper;