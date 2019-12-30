import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

export const App = () =>{
    return(
        <div className='catch-of-the-day'>
            <div className='menu'>
                <Header 
                    tagline='Fresh SeaFood Market'
                />
            </div>
            <Inventory 
                inventory='Invent something'
            />
            <Order />
        </div>
    )
}

