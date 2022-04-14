const CloseBtn = ({ onMenuCloseButton }) => {
  return (
    <>
      <a href="#" className="close-button d-lg-none" onClick={onMenuCloseButton}>&times;</a>
    </>
  )
}

export default CloseBtn;