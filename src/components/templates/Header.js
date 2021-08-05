import { NavLink } from 'react-router-dom';
import logopkmn from './../../assets/pkmn-logo.png';
const Header = () => {
    return (

        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
            <img src={logopkmn} width="50" alt="logo" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">to
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/carousel">Carousel</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                <a activeClassName="active" className="nav-link" to="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}
export default Header;