import React from 'react'
import styled from 'styled-components'

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
                        <AddProfilePicText>Add a ProfilePic</AddProfilePicText>
                    </a>
                </User>
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
export default Leftside
