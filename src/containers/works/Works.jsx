import React from 'react'
import { Work } from '../../components'
import './works.css'

//Images
import dAP from '../../assets/projects/visitsho-cover.png'
import Travel from '../../assets/projects/travelsite.jpg'
import MovieApp from '../../assets/projects/movin.png'
import piazza from '../../assets/projects/piaza.png'
import Taskies from '../../assets/projects/17.png'
import FlyEase from '../../assets/projects/flyymo.png'
import FinApp from '../../assets/projects/Frame 476.png'
import viz from '../../assets/projects/cs doc.png'
import pics from '../../assets/projects/piaacs.jpg'
import finn from '../../assets/projects/Doc.png'
import Fly from '../../assets/projects/Frame 495.png'
import digikala from '../../assets/projects/di.jpg'
import dk from '../../assets/projects/Desktop - 1.png'

function Works() {
    return (
        <div className='works section-margin' id='works'>
        <h1 className='gradient-text'>Portfolio</h1>
        <h3>Check Out Some of My Projects.</h3>
            <div className='works-container'>
                <Work image={dAP} title="Visitsho App" subTitle="Case Study" text="Simplifies booking and managing doctor appointments with reminders and secure scheduling."  caseStudyImage={viz}  />
                <Work image={piazza} title="Piazza Redesign" subTitle="Case Study" text="Improve the usability of Piazza, focusing on a better posting flow and better accessibility to various class sections" caseStudyImage={pics}  />
                <Work image={FinApp} title="Finance App" subTitle="UI/UX Design" text="Manage all your bank accounts, view balances, and track expenses with an intuitive and secure interface." caseStudyImage={finn} figmaLink="https://www.figma.com/design/ywm6BmEeu66NZqIp5CS8Bk/Finance-Application?node-id=0-1&t=uuwlcsu5JCQ1fqBa-1"/>
                <Work image={digikala} title="Digikala Popular Products Challenge" subTitle="UI/UX Design" text="Adding Best Seller tag for quick product trust" caseStudyImage={dk} />
                <Work image={MovieApp} title="MovieNet" subTitle="UI Design & Development" text="Discover and track movies and TV series with personalized recommendations." liveLink="https://movienet-project.netlify.app/" />
                
                <Work image={FlyEase} title="Fly Ease" subTitle="UI/UX Design" text="FlyEase is a flight booking app that streamlines searches, bookings, and ticket management." caseStudyImage={Fly}/>
                <Work image={Taskies} title="Taskies" subTitle="UI/UX Design" text="Organize tasks and projects, set priorities, and collaborate efficiently to achieve your goals." figmaLink="https://www.figma.com/design/oGh2yCbLYjoWyeohNJbzt3/Taskies?node-id=0-1&t=B9Ac4kx4vhUmrbsQ-1" />
                
               {/*
               <Work image={FlyEase} title="Rahnama E-commerce" subTitle="UI/UX Design" text="FlyEase is a flight booking app that streamlines searches, bookings, and ticket management." caseStudyImage={Fly}/>
               <Work image={Travel} title="Tourbama Landing" subTitle="UI/UX Design" text="Find and book exciting tours in , perfect for your next adventure." figmaLink="https://www.figma.com/design/KdjjGgklTNUwbV8P58ij49/Travel?node-id=0-35&t=PGf2yKRfliAv70EX-1" />
*/} 
            </div>
        </div>
    )
}

export default Works
