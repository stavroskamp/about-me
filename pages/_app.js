import React from "react";
import App from "next/app";
import { Layout } from "../components";
import "./styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Stavros Kampanakis | Front End Developer</title>
          <link
            href="https://fonts.googleapis.com/css?family=Rubik"
            rel="stylesheet"
            key="google-font-rubik"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default MyApp;
