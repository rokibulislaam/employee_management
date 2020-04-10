import React, { Fragment } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components';
const ProgressBar = styled.div`
  height: 150px;
  width: 150px;
  @media only screen and (max-width: 600px) {
    height: 90px;
    width: 90px;
  }
`;
export default function RadialProgress() {
  return (
    <ProgressBar>
      <CircularProgressbar
        styles={{
          path: {
            stroke: '#183283',
          },
          text: {
            fill: '#183283',
          },
        }}
        className="progress"
        value={80}
        text={`${'80'}%`}
      />
    </ProgressBar>
  );
}
