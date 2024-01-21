import Head from "next/head";
import { ConfiguracaoUser } from "@/components/ConfiguracaoUser";
import Menu from "@/components/NavDash";


export default function Settings() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>
      <Menu />
      <ConfiguracaoUser />
    </div>
  );
}
