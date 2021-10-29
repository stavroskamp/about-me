import React from "react";
import App from "next/app";
import { Layout } from "../components";
import "../styles/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import profile from "../public/profile-240w.jpg";

class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <title>Stavros Kampanakis | Creating great web experiences</title>
          <link
            href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
            rel="stylesheet"
            key="google-font-rubik"
          />
          <meta
            name="Description"
            content="Hi, I'm Stavros Kampanakis and this is my website. Here you will find information about me, my previous works and projects"
          ></meta>
          <meta property="og:image" content={profile} />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default MyApp;
