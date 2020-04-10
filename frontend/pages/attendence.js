import React from 'react';

import Container, { MainContainer } from '../components/styles/Container';
import Nav from '../components/Nav';
import Attendence from '../components/Attendence';

export default function attendence() {
  return (
    <MainContainer>
      <Nav page="Attendence" />
      <Container>
        <Attendence />
      </Container>
    </MainContainer>
  );
}
