import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Logo from "../../img/logo.png";
import { mobile } from "../../responsive";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const Image = styled.img`
    width: 300px;
    ${mobile({ width: "150px", marginLeft: "-50vw"})};
  `;

  return (
    <>
      <nav className="navbar">
        <Link to="/" onClick={closeMobileMenu}>
          <Image src={Logo} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/daftar-harga"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Daftar Harga <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/kontak" className="nav-links" onClick={closeMobileMenu}>
              Kontak
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/alamat" className="nav-links" onClick={closeMobileMenu}>
              Alamat
            </Link>
          </li>
          <li>
            <a
              href="https://linktr.ee/bintangphoto"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Pesan Sekarang
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
