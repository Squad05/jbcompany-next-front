import Head from "next/head";
import { useAuth } from "@/hooks/useAuth";
import Menu from "@/components/NavDash";
import CardsHome from "@/components/CardsHome";
import BasicEditingGrid from "@/components/TabelaHome";

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
      <CardsHome />
      <BasicEditingGrid />
    </div>
  );
};

export default Home;
