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
            <h1 className={styles.title}>Meet Atmosleep.</h1>
            <p>
              Achieve your dreams, day and night. Atmosleep is an app that makes
              it possible to learn while you sleep. Play study notes, learn a
              new language, listen to relaxing music, or tune in for guided
              meditation. No need to choose between productivity and sleep—have
              your cake and eat it, too.
            </p>
          </div>
          <div className={styles.image}>
            <Image src="/mockup.png" height="2000" width="2240" />
          </div>
        </div>
        <div id="feedback" className={styles.feedback}>
          <h1>We want to hear your thoughts.</h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScHViYF9UWCU0FD5jSi0pEg1PpWKKybZMDQySBfLOw4vodwbA/viewform?embedded=true"
            width="640"
            height="1250"
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
