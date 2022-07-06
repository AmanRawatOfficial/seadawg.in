import React from 'react'

import SeaDawgMark from '../../components/SeaDawgMark/SeaDawgMark'
import HomeButton from "../../components/HomeButton/HomeButton"
import "./Intro.scss"

function Intro() {
    return (
        <div className='intro'>
            <HomeButton />
            <SeaDawgMark />
            <div className='comic_container'>
                <div className='comic_stripe_container'>
                    <div className='comic_stripe_element'></div>
                    <div className='comic_stripe_element'></div>
                    <div className='comic_stripe_element'></div>
                </div>
            </div>
        </div>
    )
}

export default Intro