const Tag = ({tags}) => { 

  return (
    <>
      {
        tags.map((tag, index) => <a key={index} href="#" className="tag">{tag}</a>)
      }
    </>
  )
}

export default Tag;