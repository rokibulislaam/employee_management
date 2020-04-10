import React, { Fragment } from 'react';
import LoginPage from '../components/LoginPage';
import DashboardContainer from '../components/DashboardContainer';
export default function Home() {
  return (
    <Fragment>
      <LoginPage />
      {/* <DashboardContainer /> */}
    </Fragment>
  );
}
