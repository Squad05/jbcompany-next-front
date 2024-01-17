import Head from "next/head";
import VagaCardList from "@/components/VagasCard";
import Menu from "@/components/NavDash";


export default function Vagas() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>
      <Menu />
      <VagaCardList />
    </div>
  );
}
