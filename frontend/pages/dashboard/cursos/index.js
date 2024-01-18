import CursoCardList from "@/components/CursosCard";
import Menu from "@/components/NavDash";
import Head from "next/head";

export default function Cursos() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>
      <Menu />

      <CursoCardList />
    </div>
  );
}
