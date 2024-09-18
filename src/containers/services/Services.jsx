import React from 'react'
import { Service } from '../../components'
import './services.css'

//Icons

import { Brackets,DigitalMarketing, Sketch, AppDev } from '../../assets'
function Services() {
    return (
        <div className='services section-margin' id='services'>
        <h1 className='gradient-text'>Services Offered</h1>
        <div className='services-container'>
            <Service icon={DigitalMarketing} title='UI/UX Design' text='As a UI/UX designer, I create intuitive and engaging user experiences. With skills in wireframing, prototyping, and user research, I enhance both usability and visual appeal.' />
            <Service icon={Brackets} title='Front-End Development' text='Skilled in HTML, CSS, JavaScript, React, and familiar with Tailwind, I effectively translate designs into responsive, high-quality code.

' />
            
            <Service icon={AppDev} title='Wordpress' text='Experienced in WordPress, including theme customization, plugin integration, and content management.'  />

        </div>
        
        </div>
    )
}

export default Services
