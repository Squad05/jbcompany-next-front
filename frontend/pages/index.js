import Navbar from "@/components/Navbar";
import Head from "next/head";

import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import Carrossel from "@/components/Carrossel";
import Faq from "@/components/Faq";
import Equipe from "@/components/Equipe";
import Scrollbtn from "@/components/Scrollbtn";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>
      <Navbar />
      <Carrossel />
      <Cards />
      <Equipe />
      <Faq />
      <Footer />
      <Scrollbtn />
    </div>
  );
}
