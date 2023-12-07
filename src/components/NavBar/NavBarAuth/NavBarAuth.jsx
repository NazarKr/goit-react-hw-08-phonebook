import { Link } from "./NavBarAuth.styled";
import useLang from "shared/hooks/useLang";
import locale from "./AuthLocale.json";
import { HeaderWraper } from "../NavBarUser/NavBarUser.styled";

const NavbarAuth = () => {
    const { lang } = useLang();
    const register = locale.register[lang];
    const login = locale.login[lang];

    return (
        <HeaderWraper>
            <Link to="/register">{register}</Link> | 
            <Link to="login"> {login}</Link>
        </HeaderWraper>
    )
}

export default NavbarAuth;