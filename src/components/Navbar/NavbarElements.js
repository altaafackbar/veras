import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"



export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.5);
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #520e9c;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    

    &.active{
        transition: all 0.1s ease-in-out;
        color: #fff;
        background: #7c07fa;
        border-radius: 15px;
        width:100%;
        height: 100%;
        
    }
`
export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

`

export const Bars = styled(FaBars)`
    display: none;
    color: #520e9c;

    @media screen and (max-width: 768px) {
        display: block;
        position: center;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    padding-right: 3rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256cel;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const Profile = styled.div`
    box-shadow: none;
    background-image: url("/images/VQUBE.png");
    width: 55px;
    height: 55px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 120%;
    background-repeat: no-repeat;
    border: 2px solid black;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
`