import FooterColumnWrapper from "./footerColumnWrapper";
import FooterInfoWrapper from "./footerInfoWrapper";
import {divideDataIntoSegments} from '../../utils/utils';

const FooterContainer = () => {
   const footerData = [
    {
      id: 1,
      href: 'tel:+78002020300',
      value: '8 800 20 20 300'
    },
    {
      id: 2,
      href: 'mailto:info@findyourjob.net',
      value: 'info@findyourjob.net'
    },
    {
      id: 3,
      href: '#',
      value: 'Обработка данных'
    },
    {
      id: 4,
      href: '#',
      value: 'Конфиденциальность'
    },
    {
      id: 5,
      href: '#',
      value: 'Публичная оферта'
    },
    {
      id: 6,
      href: '#',
      value: 'Вакансии'
    },
    {
      id: 7,
      href: '#',
      value: 'Компании'
    },
    {
      id: 8,
      href: '#',
      value: 'Контакты'
    }
  ];

  const firstColumnData = divideDataIntoSegments(footerData, 0, 2);
  const secondColumnData = divideDataIntoSegments(footerData, 2, 5);
  const thirdColumnData = divideDataIntoSegments(footerData, 5, 8);
  return (
    <div className="container">
        <div className="row">
          <FooterInfoWrapper />
          <FooterColumnWrapper title='Свяжитесь с нами' footerData={firstColumnData} />
          <FooterColumnWrapper title='Информация' footerData={secondColumnData}/>
          <FooterColumnWrapper title='Навигация по сайту' footerData={thirdColumnData}/>
        </div>
      </div>
  )
}

export default FooterContainer;