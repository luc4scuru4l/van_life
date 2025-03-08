import React from "react";
import Van from "../components/Van"
const Vans = () => {
  const [vans, setVans] = React.useState({})
  React.useEffect(() => {
    fetch("/api/vans").then(r => r.json())
                      .then(r => setVans(r))
                      .catch(e => console.log(e))
  }, [])
  const vansList = vans["vans"]?.map( v => Van(v))
  return (
    <main className="vans-container">
      <div className="main-container">
        <h1>Explore our van options</h1>
        <section className="vans-filters">
          <div>
            <button>Simple</button>
            <button>Luxury</button>
            <button>Rugged</button>
          </div>
          <button id="clear">Clear filters</button>
        </section>
      </div>
      <section className="vans-cards">
        {vansList}
      </section>
    </main>
  )
}
export default Vans;