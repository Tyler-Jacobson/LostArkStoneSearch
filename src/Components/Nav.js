import { Link } from "react-router-dom";
import '../App.css';


function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-links">
                <Link to="/">Engraving Search</Link>
                <span />
                <Link to="/builds-list">Builds</Link>
            </div>
        </div>
    )
}
export default Nav