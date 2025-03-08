import { Link } from "react-router-dom"
const Van = ({id, name, imageUrl, type, price}) => {
  return (
    <article key={id}>
      <Link to={`${id}`}>
        <img src={imageUrl} alt={`Image of ${name} van`}/>
        <div className="van-info">
          <h4>{name}</h4>
          <span>{price}</span>
        </div>
        <span className={"tag " + type + "-tag"}>{type[0].toUpperCase() + type.substring(1)}</span>
      </Link>
    </article>
  )
}

export default Van;