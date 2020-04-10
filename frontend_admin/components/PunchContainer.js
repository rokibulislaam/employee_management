import React, { Fragment } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  max-width: 1000px;
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
  ${({ heading }) =>
    heading &&
    `margin-bottom: 20px;
    padding: 0px;
        `};
  @media only screen and (min-width: 600px) {
    padding: 20px 40px;
    /* min-width: 400px; */
    /* margin: auto; */
  }
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    ${({ wide }) =>
      wide &&
      ` width : 500px;
        margin: auto;
    margin-bottom: 20px;
        
        `};
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-rows: 2;
  grid-gap: 20px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PunchAttendence = styled.div`
  h3 {
    display: inline-block;
    margin-right: 20px;
  }
  .dateHeader {
    font-size: 1em;
  }
  .punchInAt {
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    background: #f7f7f7;
    margin: 10px 2px;
    padding: 5px 10px;
    h4 {
      color: #727272;
    }
  }
  .punchHour {
    color: #1f1f1f;
    box-sizing: border-box;
    align-items: center;
    background-color: #f9f9f9;
    border: 5px solid #e3e3e3;
    border-radius: 50%;
    display: flex;
    font-size: 18px;
    height: 120px;
    justify-content: center;
    margin: 10px auto;
    width: 120px;
  }
  .punchButton {
    button {
      display: block;
      margin: auto;
      background-color: #f2f2f2;
      border: none;
      padding: 20px 32px;
      text-align: left;
      text-decoration: none;
      font-size: 16px;
      border-radius: 10px;
      width: 80%;
      background-color: #183283;
      color: white;
      text-align: center;
      text-transform: uppercase;
      padding: 12px 32px;
      font-family: inherit;
    }
  }
  .activityTracker {
    .StepProgress {
      position: relative;
      padding-left: 45px;
      list-style: none;
    }
    .StepProgress::before {
      display: inline-block;
      content: '';
      position: absolute;
      top: 12px;
      left: 15px;
      width: 10px;
      height: 95%;
      border-left: 2px solid #ccc;
    }
    li {
      position: relative;
      counter-increment: list;
    }
    li:not(:last-child) {
      padding-bottom: 20px;
    }

    li::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 7px;
      left: -35px;
      width: 12px;
      height: 12px;
      border: 2px solid ${({ theme }) => theme.blue};
      border-radius: 50%;
      background-color: #fff;
    }
  }
  .activityTime {
    display: block;
  }
`;
function getTimeInLocale() {
  const currentTime = new Date();
  const isPM = () => (currentTime.getHours() >= 12 ? true : false);
  const currentHour = Math.abs(Number(currentTime.getHours()) - 12);
  const currentMinute = currentTime.getMinutes();
  const singleDigitMinute = () => (String(currentMinute).length < 2 ? true : false);
  if (isPM) {
    return `${currentHour} : ${singleDigitMinute() ? `0` : ``} ${currentMinute} PM`;
  } else {
    return `${currentHour} : ${currentMinute} AM`;
  }
}

export default function PunchContainer() {
  return (
    <Fragment>
      <Container>
        <Grid>
          <Paper gridArea="punch">
            <PunchAttendence>
              <h3>Punch Attendence</h3>
              <span className="dateHeader">{new Date().toDateString()}</span>
              <div className="punchInAt">
                <h5>Last Punch at</h5>
                <h4>
                  {new Date().toDateString()} {new Date().toLocaleTimeString()}
                </h4>
              </div>
              <div className="punchHour">
                <span>{getTimeInLocale()}</span>
              </div>
              <div className="punchButton">
                <button>Punch IN</button>
              </div>
            </PunchAttendence>
          </Paper>
          <Paper gridArea="punch">
            <PunchAttendence>
              <h3>Today's Activity</h3>
              <div className="activityTracker">
                <ul className="StepProgress">
                  <li>
                    <strong>Punch Out</strong>
                    <span className="activityTime">{getTimeInLocale()}</span>
                  </li>
                  <li>
                    <strong>Punch In</strong>
                    <span className="activityTime">{getTimeInLocale()}</span>
                  </li>
                </ul>
              </div>
            </PunchAttendence>
          </Paper>
        </Grid>
      </Container>
    </Fragment>
  );
}
