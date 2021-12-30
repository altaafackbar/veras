import React, {useState} from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo, Profile } from './NavbarElements'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'
import './Navbar.css'
import { IconContext } from 'react-icons'


function Navbar() {

    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    const sideBarItems = [

        {
            title: 'Dashboard',
            path: '/dashboard',
            cname: 'nav-text',
            icon: <RiIcons.RiDashboardLine/>
        },
        {
            title: 'Engagement',
            path: '/engagement',
            cname: 'nav-text',
            icon: <BsIcons.BsFillPeopleFill/>
        },
        {
            title: 'Profile',
            path: '/profile',
            cname: 'nav-text',
            icon: <BsIcons.BsFillPersonFill/>
        },
        {
            title: 'Settings',
            path: '/settings',
            cname: 'nav-text',
            icon: <AiIcons.AiFillSetting/>
        },
    ]
    return (
        <>
            <Nav>
                <NavLogo to="/dashboard">
                    <img src={require('../../assets/images/VQUBE.png')} alt='logo' width="50" height="50" />
                </NavLogo>
                <SearchBar/>

                
                <nav className={sidebar ? 'nav-active-menu' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <IconContext.Provider value={{ style: {fontSize: '60px', color: "#fff", paddingLeft: 25,}}}>
                                    <AiIcons.AiOutlineClose/>
                                </IconContext.Provider>
                            </Link>
                        </li>
                        {sideBarItems.map((item, index) => {
                            return (
                                <li key={index} className={item.cname}>

                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <NavMenu>
                    <NavLink to="/dashboard" activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to="/engagement" activeStyle>
                        Engagement
                    </NavLink>
                    <NavLink to="/profile" activeStyle>
                        Profile
                    </NavLink>
                    <NavLink to="/settings" activeStyle>
                        Settings
                    </NavLink>
                </NavMenu>
                <Profile></Profile>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <Bars onClick={showSidebar}/>
                    </Link>
                </div>
                
            </Nav>
        </>
    )
}

export default Navbar
