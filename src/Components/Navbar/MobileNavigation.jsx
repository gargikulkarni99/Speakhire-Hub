import NavLinks from "./NavLinks";
import "./NavBar.css";
import { MdOutlineMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { useState } from "react";
import Logo from "/src/assets/logo.svg";

const MobileNavigation = () => {
    const [click, setClick] = useState(false);
    const Hamburger = (
        <MdOutlineMenu
            className="HamburgerMenu"
            size="30px"
            color="black"
            onClick={() => setClick(!click)}
            aria-label="Open Menu"
        />
    );
    const Close = (
        <MdClose
            className="HamburgerMenu"
            size="30px"
            color="black"
            onClick={() => setClick(!click)}
            aria-label="Close Menu"
        />
    );

    const closeMenu = () => setClick(false);

    return (
        <nav className="MobileNavigation">
            <img className="logo" src={Logo} alt="Logo" />
            {click ? Close : Hamburger}
            {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
        </nav>
    );
}

export default MobileNavigation;
    