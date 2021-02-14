import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className='header__img' src='Personal-Logo.png' alt=''/>
            <div className='header__links'>
                <a className='header__link__home' href=''>Home</a>
                <a className='header__link__about' href=''>About</a>
                <a className='header__link__skills' href=''>Skills</a>
                <a className='header__link__portfolio' href=''>Portfolio</a>
                <a className='header__link__contacts' href=''>Contacts</a>
            </div>
        </div>
    )
}

export default Header
