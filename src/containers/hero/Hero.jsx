import React from 'react'
import './hero.css'

//Assets

import wb_img from "../../assets/ASSETT.png"
import my_img from "../../assets/photo_2024-10-17_19-11-33.jpg"

function Hero() {
    return (
        <>
        <div className='hero section-padding' id='home'>
            <div className='hero-content'>
                <div className='profile-image-container'>
                    <img src={my_img} alt="aylin" className='profile-image'/>
                </div>
                <h1 className='gradient-text'>I’m Aylin Abdollahi</h1>
                <h2>UI/UX Designer</h2>
                <p>My mission is to create engaging, user-friendly web interfaces and software solutions using advanced design and development tools.</p>
                
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
