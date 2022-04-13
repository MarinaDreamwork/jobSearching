const Navigation = () => {
  const navLinks = ['Главная', 'Вакансии', 'Компании'];
  return (
    <nav className='nav'>
      <ul className="menu d-flex flex-column flex-lg-row">
        {
          navLinks.map((navLink, index) => <li className="menu-item" key={navLinks[index]}>
          <a href="#" className="menu-link button">{navLink}</a>
        </li>)
        }
      </ul>
    </nav>
  )
}

export default Navigation;