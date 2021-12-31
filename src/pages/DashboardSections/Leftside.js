import React from 'react'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Leftside = () => {
    return (
        <Container>
            <ArtCard>
                <User>
                    <CardBanner/>
                    <a>
                        <ProfilePic/>
                        <Link>Welcome Veras!</Link>
                    </a>
                    <a>
                        <AddProfilePicText>Add a Profile Picture</AddProfilePicText>
                    </a>
                </User>
                <Widget>
                    <IconContext.Provider value={{ style: {fontSize: '25', color: '#520e9c'}}}>
                        <AiIcons.AiFillBell/>
                    </IconContext.Provider>
                    
                    <a>
                        <span>You have 2 new messages</span>
                        
                    </a>
                    
                </Widget>
                
            </ArtCard>

            <ArtCard>
                <Header>
                    <a>
                        <span>
                            Upcoming Engagements
                        </span>
                    </a>
                </Header>
                
                <Engagement>
                    <a>
                        <span>Polls A</span>
                        <span>12/31/2021</span>
                        
                    </a>
                </Engagement>
                <Engagement>
                    <a>
                        <span>Polls B</span>
                        <span>12/31/2021</span>
                        
                    </a>
                </Engagement>
                
            </ArtCard>

            <ArtCard>
                <Header>
                    <a>
                        <span>
                            Latest Poll Results
                        </span>
                    </a>
                </Header>
                <Result>
                    <a>
                        <span>Do you support the proposed green transit line?</span>
                        
                    </a>
                    
                </Result>
                
                
            </ArtCard>
        </Container>
    )
}

const Container = styled.div`
    grid-areas: leftside;

`

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 9px;
    transition: box-shadow 70ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`
const User = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBanner = styled.div`
  background: url("/images/VQUBE.png");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Header = styled.div`
  background-color: #7c07fa;
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

const ProfilePic = styled.div`
  box-shadow: none;
  background-image: url("/images/VQUBE.png");
  width: 75px;
  height: 75px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddProfilePicText = styled.div`
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
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
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

export default Leftside
