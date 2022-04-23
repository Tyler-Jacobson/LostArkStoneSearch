import { NavLink } from "react-router-dom";
//import '../App.css';
import '../css/bootstrap-night.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useDispatch, useSelector } from "react-redux"
import { setDarkMode } from "../actions";

function Nav() {
  const dispatch = useDispatch()
  const darkModeRedux = useSelector(state => state.darkmodeReducer)

  function toggleDarkmode() {
    dispatch(setDarkMode(!darkModeRedux))
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Lost Ark Toolkit</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Engraving Search</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/top-engravings">Top Engravings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/builds-list">Builds List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/settings">Settings</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://discord.gg/x82dcfNcjw" target="_blank" rel="noreferrer">Discord</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav