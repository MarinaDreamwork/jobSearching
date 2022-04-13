const ButtonWithIcon = ({ title, src }) => {
  return (
    <>
      <a className='button button-primary'>
        <svg width='15' height='15' className="button-icon">
          <use xlinkHref={src}></use>
        </svg>
        <span className='button-text d-none d-md-inline-block'>{title}</span>
      </a>
    </>
  )
}

export default ButtonWithIcon;