import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">#VANLIFE</Link>
      <nav className="tabs">
        <Link className="tab-title" to="/host">Host</Link>
        <Link className="tab-title" to="/about">About</Link>
        <Link className="tab-title" to="/vans">Vans</Link>
      </nav>
    </header>
  )
}

export default Header;