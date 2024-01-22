import Head from "next/head";
import Menu from "@/components/NavDash";
import { useAuth } from "@/hooks/useAuth";
import AtualizarCurso from "@/components/AtualizarCursos";

export default function CursoAtualizado() {
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
      <AtualizarCurso />
    </div>
  );
}
