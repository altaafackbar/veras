import React, { Component } from 'react'

import './FormPages.css'

import TextField from "@material-ui/core/TextField";
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Candidates() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }

    const { values, handleChange } = this.props;
    const candidates = this.props.candidates;
    return (
        <div style={{flexDirection: 'flex-column', justifyContent: 'center', alignItems: 'center'}}>
        <section class="electionHeader">
            <h1>Vote in the {values.election} Election</h1>
        </section>
        
        <section class="infoHeader">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div className="rectangle"/>
                <p className='type'>Choose your candidates</p>
                
            </div>
            
        </section>
        <section class="contentHeader">
  
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>

                <p className='labels'>Choose your candidates</p>
  
                
            </div>
            
        </section>
        
    </div>
    )
  }

