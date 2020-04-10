import React from 'react';
import TasksContaier from '../components/Tasks.js';
import Nav from '../components/Nav';
import Container, { MainContainer } from '../components/styles/Container';
export default function assign_tasks() {
  return (
    <MainContainer>
      <Nav page="Assign Tasks" />
      <Container>
        <TasksContaier />
      </Container>
    </MainContainer>
  );
}
