import { Link } from "react-router-dom";
import '../App.css';
import { useDispatch, useSelector } from "react-redux"
import { setDarkMode } from "../actions";

function Nav() {
    const dispatch = useDispatch()
    const darkModeRedux = useSelector(state => state.darkmodeReducer)

    function toggleDarkmode() {
        dispatch(setDarkMode(!darkModeRedux))
    }

    return (
        <div className={darkModeRedux ? "nav-container-darkmode" : "nav-container"} >
            <div className="nav-spacer">
                <button className="toggle-darkmode-button" onClick={toggleDarkmode}>Toggle Darkmode</button>
            </div>
            <div className={darkModeRedux ? "nav-links-darkmode" : "nav-links"}>
                <Link className="nav-link" to="/">Engraving Search</Link>
                <span className="nav-link-span"/>
                <Link className="nav-link" to="/top-engravings">Top Engravings</Link>
                <span className="nav-link-span"/>
                <Link className="nav-link" to="/builds-list">Builds</Link>
            </div>
            <a className="discord-shilling" href="https://discord.gg/x82dcfNcjw" alt="Discord link" target="_blank" rel="noreferrer">Join my <span className="discord-link-light">Discord</span> if you have feedback or suggestions. If you suggest something it will probably be added</a>
        </div>
    )
}
export default Nav