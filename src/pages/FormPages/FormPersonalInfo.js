import React, { Component } from 'react'
import './FormPages.css'

import TextField from "@material-ui/core/TextField";
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@material-ui/core/Button';
import Checkbox from '@mui/material/Checkbox';
import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai'
import { createTheme } from '@mui/material/styles';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class FormPersonalInfo extends Component {

  state = {
    isrnValid: true,
    dobValid: true,
    captchaValid: true, 
    test: 0,
  };
  notify = (message) => {
    toast.error(message,
    {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  };
  continue = e => {
    console.log(this.state)
    e.preventDefault();
    this.setState({test: 1})
    if(this.props.values.isrn == ''){
      console.log("EMPTY")
      this.setState({isrnValid : false})
      this.notify("Please fill out the ISRN field!")

    }
    if(this.props.values.dob == ''){
      console.log("EMPTY")
      this.setState({dobValid : false})
      this.notify("Please fill out the DOB field!")
    }
    this.forceUpdate();
    //this.props.nextStep();
  };

  onChange = value => {
    console.log('Captcha value:', value);
  }

 handleValidation(value) {
    console.log(value)
  };

  render() {
    const theme = createTheme({
      status: {
        danger: '#e53e3e',
      },
      palette: {
        primary: {
          main: '#0971f1',
          darker: '#053e85',
        },
        veras: {
          main: '#766cce',
          darker: '#5b51ad',
        },
      },
    });
    const { values, handleChange } = this.props;
    return (
      <div style={{flexDirection: 'flex-column', justifyContent: 'center', alignItems: 'center'}}>
      <section class="electionHeader">
          <h1>Vote in the {values.election} Election</h1>
      </section>
      
      <section class="infoHeader">
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
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
                    onChange={handleChange('isrn')}
                    defaultValue={values.email}
                    margin="normal"
                    fullWidth
                    type= "number"
                    id="outlined-basic"
                    variant="outlined"
                    className='inputField'
                    
                    
                  />
              </div>
              <p className='labels'>Date of Birth - Year/Month/Day</p>

              <div class="input">
              <TextField
                placeholder="ISRN"
                type='date'
                onChange={handleChange('dob')}
                margin="normal"
                fullWidth
                id="outlined-basic"
                variant="outlined"
                className='inputField'
                
              />
              </div>
              <br />
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Checkbox
                  
                  defaultChecked
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                />
                <p className='checkboxFont'>I have read and accepted our policies</p>
              </div>


              <div className="App">
                <ReCAPTCHA
                  sitekey="6LfLyYcgAAAAAJfJBFpEUQctocaRiRGoCoy0-lg7"
                  onChange={this.onChange}
                />
              </div>
              <br />
              <div class="input">
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
                fullWidth
                className='navButton'
              >Continue 
                <IconContext.Provider value={{ style: {fontSize: '25', color: '#520e9c'}}}>
                    <AiIcons.AiOutlineArrowRight/>
                </IconContext.Provider>
              </Button>
                </div>

          </div>


          
      </section>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
  </div>
    )
  }
}

export default FormPersonalInfo;