import TagsGroup from "../tagsGroup"

const TagsGroupSearchWrapper = () => {
  const tagsSearchVacancies = ['Front-end', 'Back-end', 'Designer'];
  return (
    <div className="tags-group mt-4 ms-2">
      <TagsGroup label='Например:' tags={tagsSearchVacancies}/>
    </div>
  )
}

export default TagsGroupSearchWrapper;