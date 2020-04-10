import React from 'react';
import Container, { MainContainer } from '../components/styles/Container';
import Nav from '../components/Nav';
import EmployeeSearch from '../components/EmployeeSearch';

export default function employeeSearch() {
  return (
    <MainContainer>
      <Nav page="Employee Search" />
      <Container>
        <EmployeeSearch />
      </Container>
    </MainContainer>
  );
}
