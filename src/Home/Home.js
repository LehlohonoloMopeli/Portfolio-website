import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <h1 class='home__text'>
                <span className='home__text__greeting'>Hi, I am</span>
                <span className='home__text__name'>Lehlohonolo Mopeli.</span>  
                <span className='home__text__description'>Full-Stack Developer</span>
            </h1>
        </div>
    )
}

export default Home
