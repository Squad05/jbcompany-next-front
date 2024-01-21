import Head from "next/head";
import VagaCardList from "@/components/VagasCard";
import Menu from "@/components/NavDash";
import { extrairIdDoToken } from "@/services/auth/EmailToken";
import styles from "../../../styles/Dashboard.module.css";
import DashboardMenuAdd from "@/components/DashboardMenuAdd";

export default function Vagas() {
  return (
    <div>
      <Head>
        <title> Jb Company</title>
      </Head>
      <Menu />
      <main className={styles.estilo_container_main}>
        <DashboardMenuAdd
          titulo={"Vagas lançadas"}
          linkRota={"/dashboard/vagas/add"}
          textoLink={"Adicionar"}
        />
        <VagaCardList />
      </main>
    </div>
  );
}
