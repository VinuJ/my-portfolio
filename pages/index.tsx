import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vinu Jey Portfolio</title>
        <meta name="description" content="Vinu Jey Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  );
};

export default Home;
