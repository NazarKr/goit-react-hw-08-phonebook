import { Link } from "./NavBarAuth.styled";
import useLang from "shared/hooks/useLang";
import locale from "./AuthLocale.json";

const NavbarAuth = () => {
    const { lang } = useLang();
    const register = locale.register[lang];
    const login = locale.login[lang];

    return (
        <nav>
            <Link to="/register">{register}</Link> | 
            <Link to="login"> {login}</Link>
        </nav>
    )
}

export default NavbarAuth;