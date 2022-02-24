import { NavLink } from "react-router-dom";
//import '../App.css';
import '../css/bootstrap-night.css';
import { useDispatch, useSelector } from "react-redux"
import { setDarkMode } from "../actions";

function Nav() {
    const dispatch = useDispatch()
    const darkModeRedux = useSelector(state => state.darkmodeReducer)

    function toggleDarkmode() {
        dispatch(setDarkMode(!darkModeRedux))
    }

    function handleActiveLink(isActive){
        return isActive ? "nav-link active-link" : "nav-link";
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Lost Ark Toolkit</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
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
                    <a className="nav-link" to="https://discord.gg/x82dcfNcjw">Discord</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}
export default Nav