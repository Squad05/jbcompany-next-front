import Head from "next/head";
import { useAuth } from "@/hooks/useAuth";
import Menu from "@/components/NavDash";
import CardsHome from "@/components/CardsHome";
import TabelaUltimasVagasLancadas from "@/components/TabelaUltimasVagasLancadas";
import styles from "../../../styles/Dashboard.module.css";
import TabelaUltimosCursosLancados from "@/components/TabelaUltimosCursosLancados";


const Home = () => {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Jb Company</title>
      </Head>{" "}
      <Menu />
      <main className={styles.estilo_container_main}>
        <h1 className={styles.estilo_titulo_sessao}> Bem vindo(a) </h1>
        <CardsHome />
        <h2 className={styles.estilo_titulo_sessao}>
          {" "}
          Ultimas Vagas Lançadas{" "}
        </h2>
        <TabelaUltimasVagasLancadas />
        <h2 className={styles.estilo_titulo_sessao}>
          {" "}
          Ultimos Cursos Lançados{" "}
        </h2>
        <TabelaUltimosCursosLancados />
      </main>
    </div>
  );
};

export default Home;
