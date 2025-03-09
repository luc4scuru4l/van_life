import bgImage from "../assets/images/about_background.png"
import { Link } from "react-router-dom";
const About = () => {
  return (
    <main className="about-container">
      <img className="bg-image" src={bgImage} alt="Man watching the night sky"/>
      <div className="main-container">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br/>
          (Hitch costs extra 😉)<br/>
          <br/>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels
        </p>
        <div className="card">
          <h2>
            Your destination is waiting. <br/>
            Your van is ready.
          </h2>
          <Link to="/vans">
            <button className="main-button">
              Explore our vans
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default About;