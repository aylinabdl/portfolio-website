import React from 'react';
import './socialmedia.css';

// Material Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// React Icons for Dribbble
import { FaDribbble } from 'react-icons/fa';

function SocialMedia() {
    return (
        <div className='socialmedia'>
            <div className='socialmedia-icon'>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ color: '#fff' }} fontSize='large' />
                </a>
            </div>
            <div className='socialmedia-icon'>
                <a href='https://github.com/aylinabdl' target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ color: '#fff' }} fontSize='large' />
                </a>
            </div>
            <div className='socialmedia-icon'>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <FaDribbble style={{ color: '#fff', fontSize: '32px' }} />
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;
