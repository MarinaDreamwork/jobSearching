import { useEffect } from 'react';
import HeaderContainer from './headerContainer';

const Header = () => {
  let navBar;
  const handleCloseMenuButton = (event) => {
    navBar.classList.remove('is-open');
  }
  const handleOpenMenuButton = (event) => {
    navBar.classList.add('is-open');
  }

  useEffect( ()=> {
    navBar = document.querySelector('#navbar');
  }, [navBar])

  return (
    <header className='header pb-5'>
      <HeaderContainer onMenuOpenButton={handleOpenMenuButton}
                      onMenuCloseButton={handleCloseMenuButton}/>
    </header>
  )
}

export default Header;