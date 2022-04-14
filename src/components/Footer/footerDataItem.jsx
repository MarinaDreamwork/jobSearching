const FooterDataItem = ({footerItemData}) => {
  return (
    <li className="footer-list-item">
      <a href={footerItemData.href} className="footer-list-link">{footerItemData.value}
      </a>
    </li>
  )
}

export default FooterDataItem;