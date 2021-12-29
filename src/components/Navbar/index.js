import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo } from './NavbarElements'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/dashboard">
                    <img src={require('../../assets/images/VQUBE.png')} alt='logo' width="50" height="50" />
                </NavLogo>
                <SearchBar/>
                <Bars/>
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
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
                
            </Nav>
        </>
    )
}

export default Navbar
