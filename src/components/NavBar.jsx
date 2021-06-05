import "../styles/navbar.scss";
import Logo from "../images/Logo.png";
import { ReactComponent as Search } from "../images/search.svg";
import MenuIcon from "./MenuIcon";
import ProfileIcon from "./ProfileIcon";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="container">

                    <img className="logo" src={Logo} alt="Instagram Logo" srcset={Logo} />

                    <div className="search">
                        <Search />
                        <span className="searchText">Search</span>
                    </div>
                    <div className="menu">
                        <MenuIcon />
                        <ProfileIcon
                            iconSize="22"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;