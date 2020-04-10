import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Fragment } from 'react';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <Fragment>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
      <meta id="Viewport" name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    </Head>
  </Fragment>
);

export default Header;
