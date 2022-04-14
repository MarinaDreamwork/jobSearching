import CategoriesContainer from "./categoriesContainer";

const CategoriesSection = () => {
  const categoriesData = [
    {
      id: 1,
      icon: '#brush',
      description: 'Дизайн'
    },
    {
      id: 2,
      icon: '#browser',
      description: 'Разработка'
    }, 
    {
      id: 3,
      icon: '#edit',
      description: 'Копирайтинг'
    },
    {
      id: 4,
      icon: '#fingerprint',
      description: 'Безопасность'
    }, 
    {
      id: 5,
      icon: '#camera',
      description: 'Видео'
    }, 
    {
      id: 6,
      icon: '#school',
      description: 'Образование'
    }
  ];

  return (
    <section className="section categories-section">
      <CategoriesContainer categoriesData={categoriesData}/>
    </section>
  )
}

export default CategoriesSection;