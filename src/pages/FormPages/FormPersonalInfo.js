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
import { ThemeProvider } from '@material-ui/core';
import axios from 'axios';

export class FormPersonalInfo extends Component {

  state = {
    isrnValid: null,
    dobValid: null,
    captchaValid: null, 
    checked: false,
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
    console.log(this.props)
    e.preventDefault();
    this.setState({test: 1})
    if(this.props.values.isrn === '' || this.props.values.dob === '' || this.state.checked === false){
      if(this.props.values.isrn === ''){
        console.log("EMPTY")
        this.setState({isrnValid : false})
        this.notify("Please fill out the ISRN field!")
  
      }
      else{
        this.setState({isrnValid : true})
      }
      if(this.props.values.dob === ''){
        console.log("EMPTY")
        this.setState({dobValid : false})
        this.notify("Please fill out the DOB field!")
      }
      else{
        this.setState({dobValid : true})
      }
      if(this.state.checked === false){
        this.notify("Please agree to our policies!")
      }
    }
    else if(this.props.values.isrn !== '' && this.props.values.dob !== '' && this.state.checked === true){

      axios.post(`link here`, 
        {
          "Birth_date": this.props.values.dob,
          "ID_number": this.props.values.isrn,
          "Our_policies": true,
          "Not_robot": true
        })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      this.props.nextStep();
    }
    
  };

  onChange = value => {
    console.log('Captcha value:', value);
  }

  onCheck = value => {
    this.state.checked = !this.state.checked;
    console.log(this.state.checked);
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
          main: '#7669cd',
          darker: '#7669cd',
        },
        veras: {
          main: '#ffff',
          darker: '#ffff',
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
                  onChange={this.onCheck}
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
                <ThemeProvider theme={theme}>
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={this.continue}
                    fullWidth
                    className='navButton'
                    
                  >Continue 
                    <IconContext.Provider value={{ style: {fontSize: '25', color: '#520e9c'}}}>
                        <AiIcons.AiOutlineArrowRight/>
                    </IconContext.Provider>
                  </Button>

                </ThemeProvider>

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