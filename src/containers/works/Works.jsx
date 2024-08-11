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
                <Work image={dAP} title="Doctor Appointment App" subTitle="Case Study(still not complete)" text=""  />

                <Work image={Travel} title="Travel Website" subTitle="UI/UX Design" text="" codeLink="https://www.figma.com/design/KdjjGgklTNUwbV8P58ij49/Travel?node-id=0-35&t=PGf2yKRfliAv70EX-1" />

                <Work image={MovieApp} title="MovieNet" subTitle="UI Design & Development" text="" codeLink="https://www.figma.com/design/f0XaIW7rwN7PJPbF8S2yPC/Movie-App?node-id=0-1&t=wVDocizjjMihQLdm-1" liveLink="https://movienet-project.netlify.app/" />

                {/*<Work image={ProfileApp} title="Finance App" subTitle="UI/UX Design" text="" codeLink="https://www.figma.com/design/IDdYqPGerrqKy6SMhky1wS/Untitled?node-id=0-1&t=iDiS56eZiTqNwXOF-1" />

                <Work image={ExpenseTracker} title="Expense Tracker" subTitle="UI/UX Design" text="This is a simple Expense Tracker design created for the React.js Bootcamp Held at EMEA College organized by TinkerHub EMEA. This was designed to give the participants a task for development." codeLink="https://www.figma.com/file/OpZVasP6AHifcys8CWcMPA/Expense-Tracker?node-id=2%3A2" />

                <Work image={Poster} title="Poster Design" subTitle="Graphic Design" text="Social Media banners created using various design tools such as Adobe Photoshop and Adobe Illustrator." codeLink="https://drive.google.com/drive/folders/17VEuYbOOSk0FqEyaVGmr7tFHKleC5xaN?usp=sharing" />*/}

            </div>
        </div>
    )
}

export default Works
