import React from 'react';
import Container, { MainContainer } from '../components/styles/Container';
import Nav from '../components/Nav';
import DashboardOverview from '../components/DashboardOverview';
export default function DashboardContainer() {
  return (
    <MainContainer>
      <Nav page="Dashboard" />
      <Container>
        <DashboardOverview />
      </Container>
    </MainContainer>
  );
}
