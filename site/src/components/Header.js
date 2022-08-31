import { Outlet, Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <>
            <nav>
                <ul className="headerWrapper">
                    <li className="headerItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="headerItem">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="headerItem">
                        <Link to="/404">404</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Header;