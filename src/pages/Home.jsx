import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="home-container">
      <div className="main-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="vans" className="main-button">Find your van</Link>
      </div>
    </main>
  )
}

export default Home;