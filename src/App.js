import React from 'react'

//Custom components
import { Footer, Works, Services, Hero, Resume, SocialMedias } from './containers'
import {  Navbar  } from './components'

import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient-bg'>
                <Navbar />
                <Hero />
            </div>
            <SocialMedias />
            <Services />
            <Resume />
            <Works />

            <Footer />

        </div>
    )
}

export default App
