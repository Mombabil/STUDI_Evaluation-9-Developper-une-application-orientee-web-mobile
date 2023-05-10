import React from 'react';
import Logo from './Logo';

const Header = () => {
    const toggleBurger = () => {
        const burger = document.querySelector('.burger');
        const body = document.querySelector('body');

        burger.style.left === "-600px" ? burger.style.left = "-300px" : burger.style.left = "-600px";
        body.style.overflow === "auto" ? body.style.overflow = "hidden" : body.style.overflow = "auto";
    }
    return (
        <>
        {/* Menu Burger */}
        <div className="burger">
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/">Mes Recettes</a></li>
                <li><a href="/">Mes services</a></li>
                <li><a href="/">A propos</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <button className="login-btn">
                Se connecter 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="login-svg">
                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                </svg>
            </button>
        </div>
        <nav>
            <Logo />
            <span className="burger-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={() => toggleBurger()}>
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </span>
        </nav>
        </>
    );
};

export default Header;