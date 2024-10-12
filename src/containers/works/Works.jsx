import React from 'react'
import { Work } from '../../components'
import './works.css'

//Images
import dAP from '../../assets/projects/visitsho-cover.png'
import Travel from '../../assets/projects/travelsite.jpg'
import MovieApp from '../../assets/projects/Movienet.png'
import piazza from '../../assets/projects/piaza.png'
import Taskies from '../../assets/projects/tasskies.jpg'
import FlyEase from '../../assets/projects/Frame 2.png'
import FinApp from '../../assets/projects/Dribble show 8.png'

function Works() {
    return (
        <div className='works section-margin' id='works'>
        <h1 className='gradient-text'>Portfolio</h1>
        <h3>Check Out Some of My Projects.</h3>
            <div className='works-container'>
                <Work image={dAP} title="Visitsho App" subTitle="Case Study" text="Simplifies booking and managing doctor appointments with reminders and secure scheduling." codeLink="https://www.behance.net/gallery/208448847/Doctor-Appointment-Application-Case-Study" />

                 <Work image={piazza} title="Piazza Redesign" subTitle="Case Study" text="Collaborative platform for students and instructors to share knowledge, homeworks and ask questions" codeLink="https://www.behance.net/gallery/208203115/Piazza-Redesign-Case-Study" figmaLink="https://www.figma.com/design/i8bHgaxLUpa9OQ1TJAO1xY/Piazza-case-study-and-design?node-id=218-2854&t=Aiso7xd4Qgu1pqN2-1"/>

                 <Work image={FinApp} title="Finance App" subTitle="UI/UX Design" text="Manage all your bank accounts, view balances, and track expenses with an intuitive and secure interface." codeLink="https://www.behance.net/gallery/209019835/Finance-Application" />
<Work image={FlyEase} title="Fly Ease" subTitle="UI/UX Design" text="Organize tasks and projects, set priorities, and collaborate efficiently to achieve your goals." Dribblelink="https://dribbble.com/shots/25019574-Fly-Ease-Flight-Booking-App" />

                 <Work image={Taskies} title="Taskies" subTitle="UI/UX Design" text="Organize tasks and projects, set priorities, and collaborate efficiently to achieve your goals." figmaLink="https://www.figma.com/design/oGh2yCbLYjoWyeohNJbzt3/Taskies?node-id=0-1&t=B9Ac4kx4vhUmrbsQ-1" />

                 

                <Work image={Travel} title="Tourbama Landing" subTitle="UI/UX Design" text="Find and book exciting tours in , perfect for your next adventure." figmaLink="https://www.figma.com/design/KdjjGgklTNUwbV8P58ij49/Travel?node-id=0-35&t=PGf2yKRfliAv70EX-1" />

                <Work image={MovieApp} title="MovieNet" subTitle="UI Design & Development" text="Discover and track movies and TV series with personalized recommendations." liveLink="https://movienet-project.netlify.app/" />

            </div>
        </div>
    )
}

export default Works
