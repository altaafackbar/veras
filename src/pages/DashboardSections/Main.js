import React from 'react'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import {Card} from 'react-bootstrap'
const Main = () => {
    return (
        <Container>
            
            <ArtCard>
                
                    <Box className='box'>
                        
                        <img src={require('../../assets/images/VQUBE.png')} alt='logo' width="50" height="50" />
                        <span>Veras Technologies</span>
                        
                    </Box>
                    <Widget>
                    <a>
                        <span>Veras Fosters Trusted Relationships Between People, Governments, Organizations, and Communities</span>
                        
                    </a>
                </Widget>
                <Widget>
                    <a>
                        <span>This is a test question:</span>                        
                    </a>
                    
                </Widget>
                <Options>

                        <Answer>Yes</Answer>       
                        <Answer>No</Answer>   
                        <Answer>Maybe</Answer>                    
                    
                </Options>
                
            </ArtCard>
            

        </Container>
    )
}

const Container = styled.div`
    grid-areas: leftside;

`
const Box = styled.div`
    display: flex;
    padding: 12px;
    align-items: center;
    font-weight: bold;

`
const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 10px;
    background-color: #fff;
    max-width: 500px;
    border-radius: 9px;
    transition: box-shadow 70ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`
const User = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  align-items: left;
`;

const CardBanner = styled.div`
  background: url("/images/VQUBE.png");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;




const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  padding-left: 25px;
`;

const AddCompanyLogoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  span{
      font-size: 12px
  }
`;

const Options = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 15px;
  display: flex;
  flex: space-around;
  flex-direction: row;
  justify-content: center;


`;
const Answer = styled.div`
  padding-left: 25px;
  padding-right: 25px;

  border-radius: 10px;
  margin: 6px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }



`;

const Engagement = styled.div`
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
    color: #0a66c2;
    cursor: pointer;
    }
  }
`;
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

export default Main
