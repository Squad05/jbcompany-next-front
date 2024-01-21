import DashboardMenuAdd from "@/components/DashboardMenuAdd";
import FormularioVagas from "@/components/FormularioVagas";
import Menu from "@/components/NavDash";
import Head from "next/head";
import styles from "../../../../styles/Dashboard.module.css";

export default function AdicionarVaga() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>

      <Menu />
      <main className={styles.estilo_container_main}>
        <DashboardMenuAdd
          titulo={"Cadastrar Vagas"}
          linkRota={"/dashboard/vagas"}
          textoLink={"Listar"}
        />{" "}
        <FormularioVagas />
      </main>
    </div>
  );
}
