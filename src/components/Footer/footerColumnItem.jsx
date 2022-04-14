import FooterDataItem from "./footerDataItem";

const FooterColumnItem = ({ footerData }) => {

  return (
    <ul className="footer-list">
      {
        footerData.map(footerItemData => 
          <FooterDataItem key={footerItemData.id} footerItemData={footerItemData}/>
        )
      }
    </ul>
  )
}

export default FooterColumnItem;