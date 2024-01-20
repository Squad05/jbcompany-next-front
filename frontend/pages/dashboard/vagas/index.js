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
          titulo={"Vagas Cadastradas "}
          linkRota={"/vagas/add"}
        />
        <VagaCardList />
      </main>
    </div>
  );
}
