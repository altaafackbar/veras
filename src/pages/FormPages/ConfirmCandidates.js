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
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@material-ui/core/Button';
import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai'
import { previousDay } from 'date-fns';

export default function ConfirmCandidates(props) {
  const [checked, setChecked] = React.useState([]);

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
    console.log(props)
    const candidates = props.values.candidates;

    const next = (e) => () => {
        props.nextStep();
     
    };
    const prev = (e) => () => {


        console.log(props)
        props.handleChange(props)
  
        if(props.values.dob == ''){
          
          
        }
        props.prevStep();
      };
    return (
        <div style={{flexDirection: 'flex-column', justifyContent: 'center', alignItems: 'center'}}>
        <section class="electionHeader">
            <h1>Confirm Your Candidates</h1>
        </section>
        
        <section class="infoHeader">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',alignItems: 'baseline'}}>
                <div className="dot"/>
                <p className='type'>These are your Chosen Candidates</p>

            </div>
            
        </section>
        <section class="contentHeader">
  
        <div class="listStyle">
              <List dense sx={{ width: '100%', maxWidth: 740, bgcolor: '#F6F7FE' }}>
                    {props.values.values.chosenCandidates.map((value) => {
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
                        
                            <ListItemText id={labelId} disableTypography className='listItemText' primary={<Typography type="body2" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 17 }}>{value}</Typography>} />
                          
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
                >Submit Vote 
                <IconContext.Provider value={{ style: {fontSize: '25', color: '#520e9c'}}}>
                    <AiIcons.AiOutlineArrowRight/>
                </IconContext.Provider>
            </Button>
          </div>
          <br />
          <div class="input">
            <Button
                color="primary"
                variant="contained"
                onClick={prev()}
                fullWidth
                className='navButton'
                >Back
                <IconContext.Provider value={{ style: {fontSize: '25', color: '#520e9c'}}}>
                    <AiIcons.AiOutlineArrowRight/>
                </IconContext.Provider>
            </Button>
          </div>
        </section>

        
    </div>
    )
  }

