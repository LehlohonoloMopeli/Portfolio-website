import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <h1 className='footer__title'>Contacts</h1>

            <div className='footer__icons'>
                <a href=''><img className='footer_icon' src='github.png' alt=''/></a>
                <a href='lehlohonolompl@gmail.com'><img className='footer_icon' src='gmail.png' alt=''/></a>
                <a href=''> <img className='footer_icon' src='linkedin.png' alt=''/></a>
                <h3><img className='footer_icon' src='contact-book.png' alt=''/> : 0731877821</h3>
                
            </div>
        </div>
    )
}

export default Footer
