import React from 'react'
import './education.css'
import '../workExperience/workexperience.css'

//Material Icons
import SchoolIcon from '@mui/icons-material/School';

import { TimelineBlock } from '..';


function Education() {
    return (
        <div className='education workexperience'>
            <div className='education-heading workexperience-heading'>
                <h2>Education</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Bachelor Degree' duration='2020 - 2024' company='Islamic Azad University Central Tehran Branch' text="Have a Bachelor's degree in Computer Engineering with a specialization in Software Engineering, providing me with a solid foundation in software development and UI/UX design." />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='High School' duration='2017 - 2020' company='Popli Khalatbari Technical School' text="Also hold a high school diploma in Computer and networks, which laid the foundation for my passion in technology

." />
            </div>
        </div>
    )
}

export default Education
