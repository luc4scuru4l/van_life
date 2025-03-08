import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VanDetail = () => {
  const [van, setVan] = useState(null);
  const params = useParams()
  useEffect( () => {
    fetch(`/api/vans/${params['id']}`)
    .then(result => result.json())
    .then(result => setVan(result["vans"]))
  }, [])
  console.log(van)
  return van ? (
    <main className="van-detail">
      <Link to="/vans" className="back">Back to all vans</Link>
      <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
      <span className={"tag " + van.type + "-tag"}>{van.type[0].toUpperCase() + van.type.substring(1)}</span>
      <h2>{van.name}</h2>
      <h3>{`$${van.price}/day`}</h3>
      <p>
        {van.description}
      </p>
      <Link to="/" className="main-button">Rent this van</Link>
    </main>
  ) : (<h2>Loading...</h2>);
}

export default VanDetail;