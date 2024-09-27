import React from 'react'
import { SocialMedia } from '../../components'
import './footer.css'

//Material Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <div className='footer section-padding'> 
            
            <SocialMedia />
           <h3>Developed by Aylin Abdollahi</h3>
        </div>
    )
}

export default Footer

