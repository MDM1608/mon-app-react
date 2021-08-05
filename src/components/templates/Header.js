
import logopkmn from './../../assets/pkmn-logo.png';
const Header = () => {
    return(
        <header>
        <h1>Header</h1>
       
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <img className="navbar-brand" src={logopkmn} width="30" alt="logo"/>
    </div>
    <li class="nav-item">
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown">
    Dropdown
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
</li>
  </nav>

      </header>
    )
}
export default Header;