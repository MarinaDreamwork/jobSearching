import InputGroup from "../inputGroup";
import SearchLoupe from '../../img/search.svg';

const InputGroupHeroWrapper = () => {
  return (
    <div className="input-group">
      <InputGroup placeholder='Начните поиск' title='Искать вакансии' src={SearchLoupe + '#search'}/>
    </div>
  )
}

export default InputGroupHeroWrapper;