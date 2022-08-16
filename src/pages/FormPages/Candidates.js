import React, { Component, useState, useEffect } from 'react'

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
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@material-ui/core/Button';
import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Candidates(props) {
  const [checked, setChecked] = React.useState([]);
  const [myValues, setMyValues] = useState(props);


  useEffect(() => {
    setMyValues(props);
  }, [props]);

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

  const notify = (message) => {
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
    const candidates = props.values.candidates;

    const next = (e) => () => {

      props.values.chosenCandidates = checked;
      console.log(myValues)
      console.log(props.values.chosenCandidates)
      props.handleChange(props)
      if(props.values.chosenCandidates.length === 0){
        notify("Please select candidates!")
        
      }
      else{
        props.nextStep();
      }
      
    };
    return (
        <div style={{flexDirection: 'flex-column', justifyContent: 'center', alignItems: 'center'}}>
        <section class="electionHeader">
            <h1>Choose Your Candidates</h1>
        </section>
        
        <section class="infoHeader">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',alignItems: 'baseline', alignContent: 'center'}}>
                <div className="dot"/>
                <p className='type'>Select up to 3 candidates</p>

            </div>
            
        </section>
        <section class="contentHeader">
  
            <div class="listStyle">

              <List dense sx={{ width: '100%', bgcolor: '#F6F7FE' }}>
                    {candidates.map((value) => {
                      const labelId = `checkbox-list-secondary-label-${value}`;
                      return (
                        <div>
                        <ListItem
                          key={value}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={handleToggle(value)}
                              checked={checked.indexOf(value) !== -1}
                              inputProps={{ 'aria-labelledby': labelId }}
                              style ={{
                                color: "#006B53",
                              }}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <ListItemText id={labelId} disableTypography className='listItemText' primary={<Typography type="body2" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 17 }}>{value}</Typography>} />
                          </ListItemButton>
                        </ListItem>
                        <Divider style={{width:'100%', paddingTop: 5, paddingBottom: 5}} />
                        </div>

                        
                      );
                    })}
                    
                  </List>
  
                
            </div>
            <br />
        <div class="input">
        <Button
          color="primary"
          variant="contained"
          onClick={next()}
          fullWidth
          className='navButton'
        >Confirm 
          <IconContext.Provider value={{ style: {fontSize: '25', color: '#520e9c'}}}>
              <AiIcons.AiOutlineArrowRight/>
          </IconContext.Provider>
        </Button>
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

