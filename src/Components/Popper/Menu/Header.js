import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Menu.scss'

function Header({ title, onBack }) {
    return ( 
       <header className="header__actions-header">
            <button className="header__actions-back-btn" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="header__actions-header-title">{title}</h4>
       </header>
    );
}

export default Header;