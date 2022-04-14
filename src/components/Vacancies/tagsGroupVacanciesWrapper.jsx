import TagsGroup from "../tagsGroup"

const TagsGroupVacanciesWrapper = () => {
  const tagsVacancies = ['Javascript', 'React', 'Node'];
  return (
    <div className="tags-group offer-tags mb-4 mb-lg-0">
      <TagsGroup label='Требования:' tags={tagsVacancies}/>
    </div>
  )
}

export default TagsGroupVacanciesWrapper;