import MenuBurger from '../../img/menu-burger.svg';

const BurgerMenuButton = ({ onMenuOpenButton }) => {
  return (
    <>
      <a href='#' className='menu-button' alt='icon: burger menu' onClick={onMenuOpenButton}>
        <img src={MenuBurger}/>
      </a>
    </>
  )
}

export default BurgerMenuButton;