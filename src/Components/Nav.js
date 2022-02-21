import { Link } from "react-router-dom";
import '../App.css';


function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-spacer"/>
            <div className="nav-links">
                <Link to="/">Engraving Search</Link>
                <span />
                <Link to="/top-engravings">Top Engravings</Link>
                <span />
                <Link to="/builds-list">Builds</Link>
            </div>
            <a className="discord-shilling" href="https://discord.gg/x82dcfNcjw" alt="Discord link" target="_blank" rel="noreferrer">Join my <span className="discord-link-light">Discord</span> if you have feedback or suggestions. If you suggest something it will probably be added</a>
        </div>
    )
}
export default Nav