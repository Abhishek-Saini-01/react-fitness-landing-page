import React from 'react'
import './Header.css'
import logo from '../../assets/img/dumble.png'

const navLinks = [
    { path: '#', display: 'Home' },    
    { path: '#', display: 'Schedule' },    
    { path: '#', display: 'Classes' },    
    { path: '#', display: 'Pricing' },    
]

const Header = () => {

    return (
        <header className='header' >
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="logo" />
                        </div>
                        <h2>FitBody</h2>
                    </div>

                    <div className="navigation">
                        <ul className="menu">
                            {
                                navLinks.map((link)=> (
                                    <li className="nav__item"><a href={link.path}>{link.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="nav__right">
                        <button className='register__btn'>Register</button>
                        <span className='mobile__menu'><i className="ri-menu-line"></i></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header