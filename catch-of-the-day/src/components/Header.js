import React from 'react'

//This is a Stateless Functional Component.
const Header = ({tagline, name}) => 
(
        <>
        <header className='top'>
            <h1>
                Catch
                <span className='ofThe'>
                    <span className='of'>Of</span>
                    <span className='the'>The</span>
                </span>
                Day
            </h1>
            <h3 className='tagline'> 
                <span>{tagline}</span>
                <span>{name}</span>
            </h3>
        </header>
        </>
    )



export default Header