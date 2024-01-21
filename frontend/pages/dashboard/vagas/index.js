import Head from "next/head";
import VagaCardList from "@/components/VagasCard";
import Menu from "@/components/NavDash";
import styles from "../../../styles/Dashboard.module.css";
import DashboardMenuAdd from "@/components/DashboardMenuAdd";
import { useAuth } from "@/hooks/useAuth";

export default function Vagas() {
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
          titulo={"Vagas lançadas"}
          linkRota={"/dashboard/vagas/add"}
          textoLink={"Adicionar"}
        />
        <VagaCardList />
      </main>
    </div>
  );
}
