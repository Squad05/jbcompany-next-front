import CursoCardList from "@/components/CursosCard";
import DashboardMenuAdd from "@/components/DashboardMenuAdd";
import FormularioCursos from "@/components/FormCursos";
import Menu from "@/components/NavDash";
import Head from "next/head";
import styles from "../../../styles/Dashboard.module.css";



export default function Cursos() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>
      <Menu />
      <main className={styles.estilo_container_main}>
        <DashboardMenuAdd />
        <CursoCardList />
      </main>

    </div>
  );
}
