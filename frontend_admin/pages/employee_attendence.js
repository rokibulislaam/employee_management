import React from 'react';
import Container, { MainContainer } from '../components/styles/Container';
import Nav from '../components/Nav';
import PunchContainer from '../components/PunchContainer';
export default function employeeAttendence() {
  return (
    <div>
      <MainContainer>
        <Nav page="Punch Attendence" />
        <Container>
          <PunchContainer />
        </Container>
      </MainContainer>
    </div>
  );
}
