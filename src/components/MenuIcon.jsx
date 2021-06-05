import "../styles/menuIcon.scss"
import { ReactComponent as Home } from "../images/Home.svg";
import { ReactComponent as Messenger } from "../images/Messenger.svg";
import { ReactComponent as Discover } from "../images/Discover.svg";
import { ReactComponent as Activity } from "../images/Activity.svg";

const MenuIcon = () => {
    return (
        <div className="menuIcon">
            <Home className="icon" />
            <Messenger className="icon" />
            <Discover className="icon" />
            <Activity className="icon" />
        </div>
    )
}

export default MenuIcon