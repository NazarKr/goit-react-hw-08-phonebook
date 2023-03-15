// import { NavLink } from "react-router-dom";
import { Link } from "./NavBarAuth.styled";

const NavbarAuth = () => {

    return (
        <nav>
            <Link to="/register">Register</Link> | 
            <Link to="login"> Login</Link>
        </nav>
    )
}

export default NavbarAuth;