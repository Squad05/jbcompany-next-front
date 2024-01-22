import Head from "next/head";
import Menu from "@/components/NavDash";
import { useAuth } from "@/hooks/useAuth";
import AtualizarVaga from "@/components/AtualizarVagas";

export default function VagaAtualizada() {
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
       <AtualizarVaga />
    
    </div>
  );
}
