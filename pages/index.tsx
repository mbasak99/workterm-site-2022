import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div /* className={styles.container} */>
      <Head>
        <title>Introduction</title>
        <meta name="description" content="Welcome to my workterm site!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Intro</main>
    </div>
  );
};

export default Home;
