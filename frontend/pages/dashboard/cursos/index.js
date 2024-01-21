import CursoCardList from "@/components/CursosCard";
import DashboardMenuAdd from "@/components/DashboardMenuAdd";
import Menu from "@/components/NavDash";
import Head from "next/head";
import { useAuth } from "@/hooks/useAuth";
import styles from "../../../styles/Dashboard.module.css";

export default function Cursos() {
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
      <main className={styles.estilo_container_main}>
        <DashboardMenuAdd
          linkRota="/dashboard/cursos/add"
          titulo={"Lista de Cursos "}
          textoLink={"Adicionar"}
        />
        <CursoCardList />
      </main>
    </div>
  );
}
