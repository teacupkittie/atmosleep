import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import React from "react";

// ***FUTURE IMPLEMENTATION OF FORMIK***
// import { Formik } from "formik";

// interface MyFormValues {
//   email: string;
//   feedback: string;
//   pillow: string;
// }

const Home: NextPage = () => {
  //   const initialValues: MyFormValues = { email: "", feedback: "", pillow: "" };
  return (
    <div className={styles.container}>
      <Head>
        <title>Atmosleep</title>
        <meta name="description" content="Achieve your dreams." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.header}>
        <Image src="/atmosleep-logo.svg" height="56" width="275" />
        <nav className={styles.nav}>
          <a href="#feedback">feedback</a>
        </nav>
      </div>

      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.text}>
            <h1 className={styles.title}>Meet Atmos.</h1>
            <p>
              An <b>all-in-one adaptive AI pillow</b> with:
              <ul>
                <li>adjustable plushness</li>
                <li>LED lighting</li>
                <li>embedded sleep analytics</li>
                <li>
                  a speaker system for your favorite music, meditations, and
                  study tools
                </li>
              </ul>
              ...all activated through your voice. Atmos listens to your needs
              to allow for screen-free comfort as you lounge or prepare to
              sleep.
              <br />
              <br />
              Achieve your dreams, day and night. You&apos;ll no longer need to
              choose between productivity, entertainment, and sleep—have your
              cake and eat it, too.
            </p>
          </div>
          <div className={styles.image}>
            <Image src="/atmos.png" width="1591" height="760" />
          </div>
        </div>
        <div id="feedback" className={styles.feedback}>
          <h1>We want to hear your thoughts!</h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeFyVjAFop2yfJsLtX4QR5BzqfJGacP8xRAhvnlTjlok6H9nQ/viewform?embedded=true"
            width="640"
            height="1800"
            frameBorder="0"
            scrolling="no"
          >
            Loading…
          </iframe>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright © 2022 Atmosleep. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
