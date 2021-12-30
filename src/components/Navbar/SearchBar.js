import React from 'react'
import { FiSearch } from "react-icons/fi"
import {IconContext} from "react-icons"

const SearchBar = () => {
    return (
        <form action="/" method="get"
        style={{
            borderWidth: 1,
            borderRadius: 5,
            alignSelf: 'center'
            
            
        }}>

        <input
        style={{
            borderWidth: 1,
            borderRadius: 5,
            width: '85%',
            height: 30,

            
            
        }}
            type="text"
            id="header-search"
            placeholder="Search"
            name="s" 
        />
        

        <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(82, 14, 156)", paddingLeft: 5, paddingTop: 10}}}>

                <FiSearch />

        </IconContext.Provider>
    </form>

    )
}



export default SearchBar
