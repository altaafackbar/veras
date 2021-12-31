import React from 'react'
import styled from 'styled-components'
import Leftside from './DashboardSections/Leftside'
import Main from './DashboardSections/Main'
import Rightside from './DashboardSections/Rightside'

const Dashboard = () => {
    return (
        <Container>


        <Layout>
            <Leftside/>
            <Main/>

        </Layout>
        
        </Container>
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
`;
export default Dashboard
