import { Link } from "react-router-dom"
const Host = () => {
  return (
    <main className="main-container">
      <div className="tabs">
        <Link className="tab-title" to={"/"}>Dashboard</Link>
        <Link className="tab-title" to={"/"}>Income</Link>
        <Link className="tab-title" to={"/"}>Vans</Link>
        <Link className="tab-title" to={"/"}>Reviews</Link>
      </div>
    </main>
  )
}

export default Host;