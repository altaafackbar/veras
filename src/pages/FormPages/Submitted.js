import React, { Component } from 'react'

import './FormPages.css'
import styled from 'styled-components'
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

export default function Submitted(props) {
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
                <h1>Your Vote
Has Been Submitted</h1>
            </section>
            
            <section class="infoHeader">
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline'}}>
                    <div className="dot"/>
                    <p className='type'>Thank You for Voting with Veras!</p>

                </div>
                
            </section>
        <section class="contentHeader">
   

            <ArtCard className='input'>
                <Header>
                    <a>
                        <span className='resultText'>
                            Your vote has been submitted!
                        </span>
                    </a>
                </Header>
                <Result>
                    <List dense sx={{ width: '100%', maxWidth: 740, bgcolor: '#FCFCFF' }}>
                    {props.values.values.chosenCandidates.map((value) => {
                      const labelId = `checkbox-list-secondary-label-${value}`;
                      return (
                        <div>
                        <ListItem
                          key={value}

                          disablePadding
                        >
                        
                            <ListItemText id={labelId} disableTypography className='listItemText' primary={<Typography type="body2" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 17, padding: 15 }}>{value}</Typography>} />
                          
                        </ListItem>
                        <Divider style={{width:'100%', paddingTop: 5, paddingBottom: 5}} />
                        </div>

                        
                      );
                    })}
                    
                  </List>
                    
                </Result>
            
                
            </ArtCard>
  
                
           
            <br />
        <div class="input">
            <Button
                color="primary"
                variant="outlined"
                onClick={next()}
                fullWidth
                className='navButton'
                >Go to Home Page
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


  const Container = styled.div`
    padding-top: 42px;
    padding-left: 60px;
    padding-right: 60px;
    max-width: 100%;
`

const Layout = styled.div`
  display: grid;
  padding: 0.5rem calc((100vw - 1100px)/2);
  grid-template-areas: "leftside main ";
  grid-template-columns: minmax(0, 10fr) minmax(0, 20fr) ;
  column-gap: 30px;
  row-gap: 20px;
  margin: -30px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 10px;
    background-color: #FCFCFF;
    border-radius: 9px;
    transition: box-shadow 70ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const Header = styled.div`
    background: linear-gradient(0deg, rgba(249, 255, 253, 0.7), rgba(249, 255, 253, 0.7)), url(LANDING.png);
  background-position: center;
  color: #fff;
  background-size: 462px;
  justify-content: center;
  align-items: center;
  height: 56px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 12px;
`;
;
const Result = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 4px 12px;
    font-size: 12px;
    color: #000;
    cursor: pointer;
    }
  }
`;

