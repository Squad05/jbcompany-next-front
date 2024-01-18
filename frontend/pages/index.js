import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import Faq from "@/components/Faq";
import Scrollbtn from "@/components/Scrollbtn";
import Intro_LandingPage from "@/components/Intro_LandingPage";

const Index = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>Jb Company</title>
      </Head>
      {!contentLoaded ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Intro_LandingPage />
          <Cards />
          <Faq />
          <Footer />
          <Scrollbtn />
        </>
      )}
    </div>
  );
};

export default Index;
