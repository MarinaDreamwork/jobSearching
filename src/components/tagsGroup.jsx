import Tag from "./Vacancies/tag";
import TagsLabel from "./Vacancies/tagsLabel";

const TagsGroup = ({label, tags}) => {
  
  return (
    <>
      <TagsLabel label={label}/>
      <Tag tags={tags} />
    </>
  )
}

export default TagsGroup;