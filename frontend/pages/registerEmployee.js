import React from 'react';
import Container, { MainContainer } from '../components/styles/Container';
import Nav from '../components/Nav';
import RegistrationContainer from '../components/RegistrationContainer';
export default function registerEmployee() {
  return (
    <div>
      <MainContainer>
        <Nav page="Register an Employee" />
        <Container>
          <RegistrationContainer />
        </Container>
      </MainContainer>
    </div>
  );
}
