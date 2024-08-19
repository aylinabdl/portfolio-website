import React from 'react'
import { Work } from '../../components'
import './works.css'

//Images
import dAP from '../../assets/projects/miro.jpg'
import Travel from '../../assets/projects/travelsite.jpg'
import MovieApp from '../../assets/projects/Movienet.png'


function Works() {
    return (
        <div className='works section-margin' id='works'>
        <h1 className='gradient-text'>Portfolio</h1>
        <h3>Check Out Some of My Projects.</h3>
            <div className='works-container'>
                <Work image={dAP} title="Doctor Appointment App" subTitle="Case Study" text="Simplifies booking and managing doctor appointments with reminders and secure scheduling."  />

                <Work image={Travel} title="Travel Website" subTitle="UI/UX Design" text="Find and book exciting tours around the world, perfect for your next adventure." codeLink="https://www.figma.com/design/KdjjGgklTNUwbV8P58ij49/Travel?node-id=0-35&t=PGf2yKRfliAv70EX-1" />

                <Work image={MovieApp} title="MovieNet" subTitle="UI Design & Development" text="Discover and track movies and TV series with personalized recommendations." codeLink="https://www.figma.com/design/f0XaIW7rwN7PJPbF8S2yPC/Movie-App?node-id=0-1&t=wVDocizjjMihQLdm-1" liveLink="https://movienet-project.netlify.app/" />

                {/*<Work image={Taskies} title="Taskies" subTitle="UI/UX Design" text="Organize tasks and projects, set priorities, and collaborate efficiently to achieve your goals." codeLink="https://www.figma.com/design/IDdYqPGerrqKy6SMhky1wS/Untitled?node-id=0-1&t=iDiS56eZiTqNwXOF-1" />

                <Work image={Piazza} title="Piazza Redesign" subTitle="UI/UX Design" text="Collaborative platform for students and instructors to share knowledge, homeworks and ask questions" codeLink="https://www.figma.com/file/OpZVasP6AHifcys8CWcMPA/Expense-Tracker?node-id=2%3A2" />

                <Work image={snapgram} title="Snapgram" subTitle="UI/UX Design" text="Connect, share, and engage with a vibrant community through photos and videos." codeLink="https://drive.google.com/drive/folders/17VEuYbOOSk0FqEyaVGmr7tFHKleC5xaN?usp=sharing" />*/}

            </div>
        </div>
    )
}

export default Works
