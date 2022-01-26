import React from 'react'
// import Image from '../img/winter-dunsin.svg'
import Button from './Button'
const Header = () => {
    return (
        <div className='header'>
            <div className="header-text">
                <h3>Hello, I'm</h3>
                <h1>Olawoore Damilola James</h1>
                <p>Front-End Developer and Data Analyst.</p>

                <div className=" btn-header">
                <a href="https://github.com/dammycute" target='blank'><Button img={`../img/github.svg`}  value="Github"/></a>
                </div>
            </div>
            <div className="header-img">
                <img src= "../img/winter-dunsin.svg" alt="" />
            </div>
        </div>
    )
}

export default Header
