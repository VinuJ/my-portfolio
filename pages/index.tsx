import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Head>
        <title>Vinu Jey Portfolio</title>
        <meta name="description" content="Vinu Jey Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <Navbar toggleSidebar={toggleSidebar}/>
    </div>
  );
};

export default Home;
