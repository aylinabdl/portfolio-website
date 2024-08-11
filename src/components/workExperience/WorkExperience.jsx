import React from 'react'
import './workexperience.css'

//Material Icons
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { TimelineBlock } from '..';

function WorkExperience() {
    return (
        <div className='workexperience'>
            <div className='workexperience-heading'>
                <h2>Work Experience And Courses</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Front-End Developer' duration='April - July 2024' company='Kanoon Informatic' text="I worked as a front-end developer at Kanoon Informatics Company and Rahnama Institute." />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='' duration='' company='Amanj Academy Product Bootcamp' text="I attended the Product Discovery Bootcamp at Amanj Academy, where I learned the essentials of user-centered design and product design. and completed a case study with their guidance." />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='' duration='' company='Google UX Design Course' text="I completed the Google UX Design course, where I learned the fundamentals of UX design." />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='' duration='' company='SheCodes Fron-End Courses' text="I completed the Google UX Design course, where I learned the fundamentals of UX design." />

            </div>
        </div>
    )
}

export default WorkExperience
