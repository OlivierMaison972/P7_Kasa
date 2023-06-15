import logo from '../../assets/images/logo/LOGO.svg';
import React from 'react';
import { NavLink } from 'react-router-dom'
import "../Header/header.css"

function Header() {
    return (
        <header className="header">
            <figure className="header__fig">
                <img className="logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
            <nav className="nav-header">
                <NavLink to="/" className="nav-header__nav-link-home">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="nav-header__nav-link-about">
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header