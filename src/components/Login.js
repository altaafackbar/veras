import styled from 'styled-components'

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <img src="/images/VQUBE.png" all=""/>
            </Nav>
        </Container>
    );
};

const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

`;

export default Login