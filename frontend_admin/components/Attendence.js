import React from 'react';
import styled from 'styled-components';
import Container from './styles/Container';
import DataTable from './Table';
const Paper = styled.div`
position: absolute;
top: 0;
padding: 20px;
background: #fff;
border-radius: 10px;
margin:0 20px;
  /* ${({ gridArea }) => `grid-area: ${gridArea}`};
  @media only screen and (min-width: 600px) {
    padding: 20px 40px;
  } */
`;
const Table = styled(DataTable)`
  /* width: 900px; */
  font-size: 1.5em;
`;

export default function Attendence() {
  return (
    <div>
      <Container>
        {/* <Grid> */}
        <Paper>
          <Table />
        </Paper>
        {/* </Grid> */}
      </Container>
    </div>
  );
}
