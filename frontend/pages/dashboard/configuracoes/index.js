import Head from "next/head";
import { ConfiguracaoUser } from "@/components/ConfiguracaoUser";
import Menu from "@/components/NavDash";
import { useAuth } from "@/hooks/useAuth";


export default function Settings() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return null;
  }


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
