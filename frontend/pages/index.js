import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import Faq from "@/components/Faq";
import Equipe from "@/components/Equipe";
import Scrollbtn from "@/components/Scrollbtn";
import Intro_LandingPage from "@/components/Intro_LandingPage";

export default function Index() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>
      <Navbar />
      <Intro_LandingPage />
      <Cards />
      <Equipe />
      <Faq />
      <Footer />
      <Scrollbtn />
    </div>
  );
}
