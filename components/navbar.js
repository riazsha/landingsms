import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../components/Logo";
import NavItem from "../components/navitem";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header >
                <nav className={`nav`}>

                    <Link href={"/"}>
                        <Logo />
                    </Link>
                    <div
                        onClick={() => setNavActive(!navActive)}
                        className={`nav__menu-bar`}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                        {MENU_LIST.map((menu, idx) => (
                            <div
                                onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                }}
                                key={menu.text}
                            >
                                <NavItem active={activeIdx === idx} {...menu} />
                            </div>
                        ))}
                    </div>
                </nav>
        </header>
    );
};

export default Navbar;