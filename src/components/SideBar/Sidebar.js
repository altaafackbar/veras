import React from 'react'
import * as FaIcons from 'react-icons'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars/>

                </Link>
            </div>
        </>
    )
}

export default Sidebar
