import React from 'react'

import MainLogo from '../Components/MainLogo'
import OurStory from '../Components/OurStory'
import OurFood from '../Components/OurFood'
import GalleryArea from '../Components/GalleryArea'
import Footer from '../../shared/Components/Footer'

import './Main.css'


const Main = () => {
    return (
        <div class='main'>
            <MainLogo />
            <OurStory />
            <OurFood />
            <GalleryArea />
        </div>
    )
}

export default Main
