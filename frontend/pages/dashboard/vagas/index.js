import Head from "next/head";
import VagaCardList from "@/components/VagasCard";
import Menu from "@/components/NavDash";
import { extrairIdDoToken } from "@/services/auth/EmailToken";

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
