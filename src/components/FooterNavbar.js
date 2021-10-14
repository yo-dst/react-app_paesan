import { navItems } from '../data';
import "../styles/FooterNavbar.scss";

const FooterNavbar = () => {
    return (
        <div className="footer-navbar">
            <div className="centered-content d-flex justify-content-around">
                {navItems.map((item, index) => (
                    <a href={item.path} className="footer-navbar-item" key={`footerNav-${index}`}>{item.name}</a>
                ))}
            </div>
        </div>
    );
}

export default FooterNavbar;