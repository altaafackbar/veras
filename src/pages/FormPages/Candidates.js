import React, { Component } from 'react'

import './FormPages.css'

import TextField from "@material-ui/core/TextField";
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export class Candidates extends Component {
    
  render() {

    const { values, handleChange } = this.props;
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
  
                <div class="input">
                  <TextField
                    placeholder="Choose your candidates"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    margin="normal"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    
                  />
                  </div>
                
            </div>
            
        </section>
        
    </div>
    )
  }
}

export default Candidates