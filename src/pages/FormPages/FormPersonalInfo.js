import React, { Component } from 'react'
import './FormPages.css'

import TextField from "@material-ui/core/TextField";
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@material-ui/core/Button';

export class FormPersonalInfo extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

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
              <p className='type'>Type in Your Information to Vote</p>
              
          </div>
          
      </section>
      <section class="contentHeader">

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <p className='labels'>Indian Status Registration Number</p>
              <div class="input">

                  
                  <TextField
                    placeholder="ISRN"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    margin="normal"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    
                  />
              </div>
              <p className='labels'>Date of Birth - Year/Month/Day</p>

              <div class="input">
                <TextField
                  placeholder="ISRN"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  margin="normal"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  
                  
                />
                </div>
              <div class="input">
                <TextField
                  id="outlined-basic"
                  type="date"
                  defaultValue="2017-05-24"
                  fullWidth
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Basic example"
                    value={values.email}
                    onChange={handleChange('email')}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </div>


          
      </section>
      
  </div>
    )
  }
}

export default FormPersonalInfo