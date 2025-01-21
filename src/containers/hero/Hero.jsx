import React from 'react'
import './hero.css'

//Assets

import wb_img from "../../assets/ASSETT.png"
import my_img from "../../assets/ay-pic.jpg"

function Hero() {
    return (
        <>
        <div className='hero section-padding' id='home'>
    <div className='hero-content' id='#animated-text'>
        <div className='profile-image-container'>
            <img src={my_img} alt="aylin" className='profile-image'/>
        </div>
        <h1 className='animated-text'>I’m Aylin Abdollahi</h1>
        <h2>Product Designer</h2>
        <p>As a person with a tech background, I found my passion in design to create
user-centered solutions. Motivated by curiosity and love for 
problem-solving, I take on challenges to create engaging, user-friendly interfaces that
improve experiences.</p>
        <p>contact: <a href='mailto:ailinabdollahi113@gmail.com' style={{textDecoration: 'underline'}}>ailinabdollahi113@gmail.com</a></p>
        <a href='#works' className='explore-btn'>Explore my works</a>
    </div>
    <div className='hero-image'>
        <img src={wb_img} alt='Hero' />
    </div>


        </div>
        <div className='hero-scroll-animation'>
            <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </div>
        </>
    )
}

export default Hero;
