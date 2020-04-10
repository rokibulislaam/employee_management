import React from 'react';
import styled from 'styled-components';
import RadialProgress from '../components/RadialProgress';
import NotMarked from '../assets/not_marked.svg';
import Marked from '../assets/marked.svg';
import UpdateSvg from '../assets/update.svg';
const Container = styled.div`
  position: relative;
  max-width: 900px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10px;
`;
const Paper = styled.div`
  /* margin: 20px; */
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  ${({ gridArea }) => `grid-area: ${gridArea}`};
  @media only screen and (min-width: 600px) {
    padding: 20px 40px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  grid-gap: 20px;
  width: 100%;
  grid-template-areas:
    'overview overview'
    'tasks updates';

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'overview'
      'tasks'
      'updates';
  }
`;
const OverViewContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-weight: 600; */
`;
const Tasks = styled.div`
  h3 {
    text-align: center;
  }

  ul {
    list-style: none;
    text-decoration: none;
  }
  ul li {
    font-size: 1.2em;
    display: block;
    position: relative;
    white-space: nowrap;
    border-bottom: 1px solid black;
  }
  .icon {
    position: relative;
    top: 3.5px;
    /* margin-right: 10px; */
    display: inline-block;
    height: 1em;
  }
`;
const Message = styled.span`
  /* display: inline-block; */
  margin: 0 10px;
  ${({ done }) => done && `text-decoration: line-through;`}
  /* display: block; */
  word-wrap: break-word;
  max-width: 5000px;
  white-space: normal;
`;
const Updates = styled.div`
  h3 {
    text-align: center;
  }

  ul {
    list-style: none;
    text-decoration: none;
  }
  ul li {
    font-size: 1.2em;
    display: block;
    position: relative;
    white-space: nowrap;
    border-bottom: 1px solid black;
  }
  .icon {
    position: relative;
    top: 3px;
    left: 0;
    /* display: inline-block; */
    height: 1em;
  }
`;
export default function DashboardOverview() {
  return (
    <Container>
      <Grid>
        <Paper gridArea="overview">
          <h3>Attendence This Month</h3>
          <OverViewContents>
            <div>
              <p>Last Attended: 10/04/2020</p>
              <p>Attended / Working Days: 9/10 </p>
              <p>Duty Leaves: 0 </p>
            </div>
            <RadialProgress />
          </OverViewContents>
        </Paper>
        <Paper gridArea="tasks">
          <Tasks>
            <h3>Today's Tasks</h3>
            <ul>
              <li>
                <span>
                  <NotMarked className="icon" />
                </span>
                <Message className="message">this is first task</Message>
              </li>
              <li>
                <span>
                  <NotMarked className="icon" />
                </span>
                <Message className="message">this is first task</Message>
              </li>
              <li>
                <span>
                  <NotMarked className="icon" />
                </span>
                <Message className="message">this is first task</Message>
              </li>
              <li>
                <span>
                  <NotMarked className="icon" />
                </span>
                <Message className="message">this is first task</Message>
              </li>
              <li>
                <span>
                  <NotMarked className="icon" />
                </span>
                <Message className="message">this is first task</Message>
              </li>
              <li>
                <span>
                  <NotMarked className="icon" />
                </span>
                <Message className="message">this is first task</Message>
              </li>
              <li>
                <span>
                  <NotMarked className="icon" />
                </span>
                <Message className="message">this is first task</Message>
              </li>
              <li>
                <span>
                  <NotMarked className="icon" />
                </span>
                <Message className="message">this is first task</Message>
              </li>
              <li>
                <span>
                  <NotMarked className="icon" />
                </span>
                <Message className="message">this is first task</Message>
              </li>
              <li>
                <span>
                  <Marked className="icon" />
                </span>
                <Message done className="message">
                  this is second task one
                </Message>
              </li>
            </ul>
          </Tasks>
        </Paper>
        <Paper gridArea="updates">
          <Updates>
            <h3>Important Updates</h3>
            <ul>
              <li>
                <span>
                  <UpdateSvg className="icon" />
                </span>
                <Message className="message">Due to lockdown, you cannot go home this year</Message>
              </li>
              <li>
                <span>
                  <UpdateSvg className="icon" />
                </span>
                <Message className="message">
                  more very important update.
                  <br></br> to apply for duty leave, click on the link below <a href="https://www.google.com">https://www.google.com</a>
                </Message>
              </li>
            </ul>
          </Updates>
        </Paper>
      </Grid>
    </Container>
  );
}
