import { Link } from "react-router-dom";

function NavBar() {
    return ( <div className="navsection">
        <ul>
            <Link to=''><li>Home</li></Link>
            <Link to='/first'><li>First Page</li></Link>
            <Link to='first/second'><li>Second Page</li></Link>
        </ul>

    </div> );
}

export default NavBar;