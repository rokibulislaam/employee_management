import App from 'next/app';
import Page from '../components/Page';
// import { ApolloProvider } from 'react-apollo';
import 'react-circular-progressbar/dist/styles.css';
import NextNProgress from '../components/Progress';
import withData from '../lib/withData';
import { withApollo } from '../lib/apollo';
import { Fragment } from 'react';
// import { ApolloProvider } from '@apollo/react-hooks';

// import withApollo from '../lib/apollo-client';

class MyApp extends App {
  // omponentDidMount() {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   // this exposes the query to the user
  //   pageProps.query = ctx.query;
  //   return { pageProps };
  // }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Fragment client={apollo}>
        <NextNProgress />
        <Page>
          <Component {...pageProps} />
        </Page>
      </Fragment>
    );
  }
}

export default withApollo({ ssr: true })(MyApp);
